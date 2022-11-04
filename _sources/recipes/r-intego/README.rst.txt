:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-intego'
.. highlight: bash

r-intego
========

.. conda:recipe:: r-intego
   :replaces_section_title:
   :noindex:

   An unsupervised gene clustering algorithm based on the integration of external biological knowledge\, such as Gene Ontology annotations\, into expression data.

   :homepage: http://marie.verbanck.free.fr/packages/InteGO/
   :license: GPL3
   :recipe: /`r-intego <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-intego>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-intego/meta.yaml>`_
   :links: doi: :doi:`10.1186/1471-2105-14-42`

   


.. conda:package:: r-intego

   |downloads_r-intego| |docker_r-intego|

   :versions:
      
      

      ``2.0-4``,  ``2.0-3``,  ``2.0-2``,  ``2.0-1``,  ``2.0-0``

      

   
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-factominer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-intego

   and update with::

      conda update r-intego

   or use the docker container::

      docker pull quay.io/biocontainers/r-intego:<tag>

   (see `r-intego/tags`_ for valid values for ``<tag>``)


.. |downloads_r-intego| image:: https://img.shields.io/conda/dn/bioconda/r-intego.svg?style=flat
   :target: https://anaconda.org/bioconda/r-intego
   :alt:   (downloads)
.. |docker_r-intego| image:: https://quay.io/repository/biocontainers/r-intego/status
   :target: https://quay.io/repository/biocontainers/r-intego
.. _`r-intego/tags`: https://quay.io/repository/biocontainers/r-intego?tab=tags


.. raw:: html

    <script>
        var package = "r-intego";
        var versions = ["2.0","2.0","2.0","2.0","2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-intego/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-intego/README.html