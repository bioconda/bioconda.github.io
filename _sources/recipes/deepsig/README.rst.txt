:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepsig'
.. highlight: bash

deepsig
=======

.. conda:recipe:: deepsig
   :replaces_section_title:
   :noindex:

   Predictor of signal peptides in proteins based on deep learning

   :homepage: https://github.com/BolognaBiocomp/deepsig
   :license: GPL / GPLv3
   :recipe: /`deepsig <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepsig>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepsig/meta.yaml>`_

   


.. conda:package:: deepsig

   |downloads_deepsig| |docker_deepsig|

   :versions:
      
      

      ``1.2.5-1``,  ``1.2.5-0``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends biopython: ``>=1.78``
   :depends keras: ``2.4.3.*``
   :depends numpy: ``1.23.*``
   :depends python: ``=3.8,<3.9``
   :depends tensorflow: ``2.2.0.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install deepsig

   and update with::

      conda update deepsig

   or use the docker container::

      docker pull quay.io/biocontainers/deepsig:<tag>

   (see `deepsig/tags`_ for valid values for ``<tag>``)


.. |downloads_deepsig| image:: https://img.shields.io/conda/dn/bioconda/deepsig.svg?style=flat
   :target: https://anaconda.org/bioconda/deepsig
   :alt:   (downloads)
.. |docker_deepsig| image:: https://quay.io/repository/biocontainers/deepsig/status
   :target: https://quay.io/repository/biocontainers/deepsig
.. _`deepsig/tags`: https://quay.io/repository/biocontainers/deepsig?tab=tags


.. raw:: html

    <script>
        var package = "deepsig";
        var versions = ["1.2.5","1.2.5","1.2.4","1.2.3","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepsig/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepsig/README.html