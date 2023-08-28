:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bwa'
.. highlight: bash

bwa
===

.. conda:recipe:: bwa
   :replaces_section_title:
   :noindex:

   The BWA read mapper.

   :homepage: https://github.com/lh3/bwa
   :license: GPL3
   :recipe: /`bwa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwa/meta.yaml>`_
   :links: biotools: :biotools:`bwa`, usegalaxy-eu: :usegalaxy-eu:`bwa_mem`, usegalaxy-eu: :usegalaxy-eu:`bwa`

   


.. conda:package:: bwa

   |downloads_bwa| |docker_bwa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.17-11</code>,  <code>0.7.17-10</code>,  <code>0.7.17-9</code>,  <code>0.7.17-8</code>,  <code>0.7.17-7</code>,  <code>0.7.17-6</code>,  <code>0.7.17-5</code>,  <code>0.7.17-4</code>,  <code>0.7.17-3</code>,  </span></summary>
      

      ``0.7.17-11``,  ``0.7.17-10``,  ``0.7.17-9``,  ``0.7.17-8``,  ``0.7.17-7``,  ``0.7.17-6``,  ``0.7.17-5``,  ``0.7.17-4``,  ``0.7.17-3``,  ``0.7.17-2``,  ``0.7.17-1``,  ``0.7.17-0``,  ``0.7.16-0``,  ``0.7.15-1``,  ``0.7.15-0``,  ``0.7.13-1``,  ``0.7.13-0``,  ``0.7.12-1``,  ``0.7.12-0``,  ``0.7.8-9``,  ``0.7.8-8``,  ``0.7.8-7``,  ``0.7.8-6``,  ``0.7.8-5``,  ``0.7.8-4``,  ``0.7.8-3``,  ``0.7.8-2``,  ``0.7.8-1``,  ``0.7.8-0``,  ``0.7.4-7``,  ``0.7.4-6``,  ``0.7.4-5``,  ``0.7.4-4``,  ``0.7.4-3``,  ``0.7.4-2``,  ``0.7.4-1``,  ``0.7.4-0``,  ``0.7.3a-9``,  ``0.7.3a-8``,  ``0.7.3a-7``,  ``0.7.3a-6``,  ``0.7.3a-5``,  ``0.7.3a-4``,  ``0.7.3a-3``,  ``0.7.3a-2``,  ``0.7.3a-1``,  ``0.7.3a-0``,  ``0.6.2-2``,  ``0.6.2-1``,  ``0.6.2-0``,  ``0.5.9-2``,  ``0.5.9-1``,  ``0.5.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends perl: 
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bwa

   and update with::

      mamba update bwa

  To create a new environment, run::

      mamba create --name myenvname bwa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bwa:<tag>

   (see `bwa/tags`_ for valid values for ``<tag>``)


.. |downloads_bwa| image:: https://img.shields.io/conda/dn/bioconda/bwa.svg?style=flat
   :target: https://anaconda.org/bioconda/bwa
   :alt:   (downloads)
.. |docker_bwa| image:: https://quay.io/repository/biocontainers/bwa/status
   :target: https://quay.io/repository/biocontainers/bwa
.. _`bwa/tags`: https://quay.io/repository/biocontainers/bwa?tab=tags


.. raw:: html

    <script>
        var package = "bwa";
        var versions = ["0.7.17","0.7.17","0.7.17","0.7.17","0.7.17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bwa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bwa/README.html