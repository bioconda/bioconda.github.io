:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tyto'
.. highlight: bash

tyto
====

.. conda:recipe:: tyto
   :replaces_section_title:
   :noindex:

   Tyto \(Take Your Terms from Ontologies\) provides a handy interface for ontologies for use in your Python application.

   :homepage: https://github.com/SynBioDex/tyto
   :license: Apache-2.0
   :recipe: /`tyto <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tyto>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tyto/meta.yaml>`_

   


.. conda:package:: tyto

   |downloads_tyto| |docker_tyto|

   :versions:
      
      

      ``1.4-0``,  ``1.0b3-0``

      

   
   :depends pyparsing: ``<3``
   :depends python: ``>=3.6``
   :depends rdflib: ``>=5.0``
   :depends requests: 
   :depends sparqlwrapper: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tyto

   and update with::

      conda update tyto

   or use the docker container::

      docker pull quay.io/biocontainers/tyto:<tag>

   (see `tyto/tags`_ for valid values for ``<tag>``)


.. |downloads_tyto| image:: https://img.shields.io/conda/dn/bioconda/tyto.svg?style=flat
   :target: https://anaconda.org/bioconda/tyto
   :alt:   (downloads)
.. |docker_tyto| image:: https://quay.io/repository/biocontainers/tyto/status
   :target: https://quay.io/repository/biocontainers/tyto
.. _`tyto/tags`: https://quay.io/repository/biocontainers/tyto?tab=tags


.. raw:: html

    <script>
        var package = "tyto";
        var versions = ["1.4","1.0b3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tyto/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tyto/README.html