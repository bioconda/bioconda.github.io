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
      
      

      ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``

      

   
   :depends coreutils: 
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends openjdk: ``>=11,<=18``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nf-test

   and update with::

      conda update nf-test

   or use the docker container::

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
        var versions = ["0.7.1","0.7.0","0.6.2","0.6.1","0.6.0"];
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