:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'verifybamid2'
.. highlight: bash

verifybamid2
============

.. conda:recipe:: verifybamid2
   :replaces_section_title:
   :noindex:

   A robust tool for DNA contamination estimation from sequence reads using ancestry\-agnostic method.

   :homepage: https://github.com/Griffan/VerifyBamID
   :license: MIT
   :recipe: /`verifybamid2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/verifybamid2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/verifybamid2/meta.yaml>`_

   


.. conda:package:: verifybamid2

   |downloads_verifybamid2| |docker_verifybamid2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.1-10</code>,  <code>2.0.1-9</code>,  <code>2.0.1-8</code>,  <code>2.0.1-7</code>,  <code>2.0.1-6</code>,  <code>2.0.1-5</code>,  <code>2.0.1-4</code>,  <code>2.0.1-3</code>,  <code>2.0.1-2</code>,  </span></summary>
      

      ``2.0.1-10``,  ``2.0.1-9``,  ``2.0.1-8``,  ``2.0.1-7``,  ``2.0.1-6``,  ``2.0.1-5``,  ``2.0.1-4``,  ``2.0.1-3``,  ``2.0.1-2``,  ``2.0.1-1``,  ``2.0.1-0``,  ``1.0.6-3``,  ``1.0.6-2``,  ``1.0.6-1``,  ``1.0.6-0``,  ``1.0.5-3``,  ``1.0.5-2``,  ``1.0.5-0``,  ``1.0.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends curl: 
   :depends htslib: ``>=1.17,<1.18.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends openssl: ``>=3.1.0,<4.0a0``
   :depends xz: ``>=5.2.6,<6.0a0``
   :depends zlib: 
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

      mamba install verifybamid2

   and update with::

      mamba update verifybamid2

  To create a new environment, run::

      mamba create --name myenvname verifybamid2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/verifybamid2:<tag>

   (see `verifybamid2/tags`_ for valid values for ``<tag>``)


.. |downloads_verifybamid2| image:: https://img.shields.io/conda/dn/bioconda/verifybamid2.svg?style=flat
   :target: https://anaconda.org/bioconda/verifybamid2
   :alt:   (downloads)
.. |docker_verifybamid2| image:: https://quay.io/repository/biocontainers/verifybamid2/status
   :target: https://quay.io/repository/biocontainers/verifybamid2
.. _`verifybamid2/tags`: https://quay.io/repository/biocontainers/verifybamid2?tab=tags


.. raw:: html

    <script>
        var package = "verifybamid2";
        var versions = ["2.0.1","2.0.1","2.0.1","2.0.1","2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/verifybamid2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/verifybamid2/README.html