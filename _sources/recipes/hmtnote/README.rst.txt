:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmtnote'
.. highlight: bash

hmtnote
=======

.. conda:recipe:: hmtnote
   :replaces_section_title:
   :noindex:

   Human mitochondrial variants annotation using HmtVar.

   :homepage: https://github.com/robertopreste/hmtnote
   :license: MIT / MIT
   :recipe: /`hmtnote <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmtnote>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmtnote/meta.yaml>`_

   


.. conda:package:: hmtnote

   |downloads_hmtnote| |docker_hmtnote|

   :versions:
      
      

      ``0.7.2-0``

      

   
   :depends aiofiles: ``>=0.4.0``
   :depends aiohttp: ``>=3.5.4``
   :depends click: ``>=7.0``
   :depends numpy: ``>=1.16.4``
   :depends pandas: ``>=0.24.2``
   :depends python: ``>=3.6``
   :depends requests: ``>=2.22.0``
   :depends scikit-allel: ``>=1.2.1``
   :depends vcfpy2: ``>=0.1.2``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hmtnote

   and update with::

      conda update hmtnote

   or use the docker container::

      docker pull quay.io/biocontainers/hmtnote:<tag>

   (see `hmtnote/tags`_ for valid values for ``<tag>``)


.. |downloads_hmtnote| image:: https://img.shields.io/conda/dn/bioconda/hmtnote.svg?style=flat
   :target: https://anaconda.org/bioconda/hmtnote
   :alt:   (downloads)
.. |docker_hmtnote| image:: https://quay.io/repository/biocontainers/hmtnote/status
   :target: https://quay.io/repository/biocontainers/hmtnote
.. _`hmtnote/tags`: https://quay.io/repository/biocontainers/hmtnote?tab=tags


.. raw:: html

    <script>
        var package = "hmtnote";
        var versions = ["0.7.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmtnote/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmtnote/README.html