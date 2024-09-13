:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lofreq'
.. highlight: bash

lofreq
======

.. conda:recipe:: lofreq
   :replaces_section_title:
   :noindex:

   A fast and sensitive variant\-caller for inferring SNVs and indels from next\-generation sequencing data

   :homepage: http://csb5.github.io/lofreq/
   :license: MIT
   :recipe: /`lofreq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lofreq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lofreq/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`lofreq_call`

   


.. conda:package:: lofreq

   |downloads_lofreq| |docker_lofreq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.5-12</code>,  <code>2.1.5-11</code>,  <code>2.1.5-10</code>,  <code>2.1.5-9</code>,  <code>2.1.5-8</code>,  <code>2.1.5-7</code>,  <code>2.1.5-6</code>,  <code>2.1.5-5</code>,  <code>2.1.5-4</code>,  </span></summary>
      

      ``2.1.5-12``,  ``2.1.5-11``,  ``2.1.5-10``,  ``2.1.5-9``,  ``2.1.5-8``,  ``2.1.5-7``,  ``2.1.5-6``,  ``2.1.5-5``,  ``2.1.5-4``,  ``2.1.5-3``,  ``2.1.5-2``,  ``2.1.5-1``,  ``2.1.5-0``,  ``2.1.4-3``,  ``2.1.4-2``,  ``2.1.3.1-0``,  ``2.1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends htslib: ``>=1.20,<1.22.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends samtools: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install lofreq

   and update with::

      mamba update lofreq

  To create a new environment, run::

      mamba create --name myenvname lofreq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lofreq:<tag>

   (see `lofreq/tags`_ for valid values for ``<tag>``)


.. |downloads_lofreq| image:: https://img.shields.io/conda/dn/bioconda/lofreq.svg?style=flat
   :target: https://anaconda.org/bioconda/lofreq
   :alt:   (downloads)
.. |docker_lofreq| image:: https://quay.io/repository/biocontainers/lofreq/status
   :target: https://quay.io/repository/biocontainers/lofreq
.. _`lofreq/tags`: https://quay.io/repository/biocontainers/lofreq?tab=tags


.. raw:: html

    <script>
        var package = "lofreq";
        var versions = ["2.1.5","2.1.5","2.1.5","2.1.5","2.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lofreq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lofreq/README.html