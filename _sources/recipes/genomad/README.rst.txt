:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genomad'
.. highlight: bash

genomad
=======

.. conda:recipe:: genomad
   :replaces_section_title:
   :noindex:

   Identification of mobile genetic elements

   :homepage: https://portal.nersc.gov/genomad/
   :developer docs: https://github.com/apcamargo/genomad/
   :license: BSD / Lawrence Berkeley National Labs BSD variant license
   :recipe: /`genomad <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomad>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomad/meta.yaml>`_

   


.. conda:package:: genomad

   |downloads_genomad| |docker_genomad|

   :versions:
      
      

      ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends aragorn: 
   :depends keras: ``>=2.7``
   :depends mmseqs2: ``13.45111.*``
   :depends numba: 
   :depends prodigal-gv: ``>=2.7.0``
   :depends python: ``>=3.8``
   :depends python-crfsuite: 
   :depends rich-click: ``>=1.4``
   :depends taxopy: ``>=0.4.0``
   :depends tensorflow: ``>=2.7``
   :depends xgboost: ``>=1.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install genomad

   and update with::

      conda update genomad

   or use the docker container::

      docker pull quay.io/biocontainers/genomad:<tag>

   (see `genomad/tags`_ for valid values for ``<tag>``)


.. |downloads_genomad| image:: https://img.shields.io/conda/dn/bioconda/genomad.svg?style=flat
   :target: https://anaconda.org/bioconda/genomad
   :alt:   (downloads)
.. |docker_genomad| image:: https://quay.io/repository/biocontainers/genomad/status
   :target: https://quay.io/repository/biocontainers/genomad
.. _`genomad/tags`: https://quay.io/repository/biocontainers/genomad?tab=tags


.. raw:: html

    <script>
        var package = "genomad";
        var versions = ["1.1.0","1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genomad/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genomad/README.html