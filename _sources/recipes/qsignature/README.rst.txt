:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'qsignature'
.. highlight: bash

qsignature
==========

.. conda:recipe:: qsignature
   :replaces_section_title:
   :noindex:

   qsignature is a simple and highly effective method for detecting potential sample mix\-ups using distance measurements between SNP

   :homepage: http://sourceforge.net/p/adamajava/wiki/Home/
   :license: GPLv3
   :recipe: /`qsignature <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qsignature>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qsignature/meta.yaml>`_

   


.. conda:package:: qsignature

   |downloads_qsignature| |docker_qsignature|

   :versions:
      
      

      ``0.1pre-5``,  ``0.1pre-4``,  ``0.1pre-3``,  ``0.1pre-2``,  ``0.1pre-1``,  ``0.1pre-0``

      

   
   :depends openjdk: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install qsignature

   and update with::

      conda update qsignature

   or use the docker container::

      docker pull quay.io/biocontainers/qsignature:<tag>

   (see `qsignature/tags`_ for valid values for ``<tag>``)


.. |downloads_qsignature| image:: https://img.shields.io/conda/dn/bioconda/qsignature.svg?style=flat
   :target: https://anaconda.org/bioconda/qsignature
   :alt:   (downloads)
.. |docker_qsignature| image:: https://quay.io/repository/biocontainers/qsignature/status
   :target: https://quay.io/repository/biocontainers/qsignature
.. _`qsignature/tags`: https://quay.io/repository/biocontainers/qsignature?tab=tags


.. raw:: html

    <script>
        var package = "qsignature";
        var versions = ["0.1pre","0.1pre","0.1pre","0.1pre","0.1pre"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/qsignature/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/qsignature/README.html