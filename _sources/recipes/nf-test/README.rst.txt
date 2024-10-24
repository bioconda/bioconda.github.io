:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nf-test'
.. highlight: bash

nf-test
=======

.. conda:recipe:: nf-test
   :replaces_section_title:
   :noindex:

   nf\-test is a simple test framework for Nextflow pipelines.

   :homepage: https://code.askimed.com/nf-test/
   :license: MIT
   :recipe: /`nf-test <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nf-test>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nf-test/meta.yaml>`_

   


.. conda:package:: nf-test

   |downloads_nf-test| |docker_nf-test|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.1-0</code>,  <code>0.9.0-0</code>,  <code>0.8.4-0</code>,  <code>0.8.3-0</code>,  <code>0.8.2-0</code>,  <code>0.8.1-0</code>,  <code>0.8.0-0</code>,  <code>0.7.3-2</code>,  <code>0.7.3-1</code>,  </span></summary>
      

      ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.4-0``,  ``0.8.3-0``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.3-2``,  ``0.7.3-1``,  ``0.7.3-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends coreutils: 
   :depends curl: 
   :depends openjdk: ``>=11,<=18``
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

      mamba install nf-test

   and update with::

      mamba update nf-test

  To create a new environment, run::

      mamba create --name myenvname nf-test

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nf-test:<tag>

   (see `nf-test/tags`_ for valid values for ``<tag>``)


.. |downloads_nf-test| image:: https://img.shields.io/conda/dn/bioconda/nf-test.svg?style=flat
   :target: https://anaconda.org/bioconda/nf-test
   :alt:   (downloads)
.. |docker_nf-test| image:: https://quay.io/repository/biocontainers/nf-test/status
   :target: https://quay.io/repository/biocontainers/nf-test
.. _`nf-test/tags`: https://quay.io/repository/biocontainers/nf-test?tab=tags


.. raw:: html

    <script>
        var package = "nf-test";
        var versions = ["0.9.1","0.9.0","0.8.4","0.8.3","0.8.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nf-test/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nf-test/README.html