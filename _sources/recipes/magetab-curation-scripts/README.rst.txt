:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'magetab-curation-scripts'
.. highlight: bash

magetab-curation-scripts
========================

.. conda:recipe:: magetab-curation-scripts
   :replaces_section_title:
   :noindex:

   Perl\-based scripts for ArrayExpress and Expression Atlas curation of MAGE\-TAB files

   :homepage: https://github.com/ebi-gene-expression-group/perl-curation-scripts
   :license: APACHE / Apache Software License
   :recipe: /`magetab-curation-scripts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/magetab-curation-scripts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/magetab-curation-scripts/meta.yaml>`_

   The scripts are used by ArrayExpress and Expression Atlas curators for
   validating and processing experiments and array designs in MAGE\-TAB format.



.. conda:package:: magetab-curation-scripts

   |downloads_magetab-curation-scripts| |docker_magetab-curation-scripts|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends perl: 
   :depends perl-atlas-modules: ``>=0.2.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install magetab-curation-scripts

   and update with::

      conda update magetab-curation-scripts

   or use the docker container::

      docker pull quay.io/biocontainers/magetab-curation-scripts:<tag>

   (see `magetab-curation-scripts/tags`_ for valid values for ``<tag>``)


.. |downloads_magetab-curation-scripts| image:: https://img.shields.io/conda/dn/bioconda/magetab-curation-scripts.svg?style=flat
   :target: https://anaconda.org/bioconda/magetab-curation-scripts
   :alt:   (downloads)
.. |docker_magetab-curation-scripts| image:: https://quay.io/repository/biocontainers/magetab-curation-scripts/status
   :target: https://quay.io/repository/biocontainers/magetab-curation-scripts
.. _`magetab-curation-scripts/tags`: https://quay.io/repository/biocontainers/magetab-curation-scripts?tab=tags


.. raw:: html

    <script>
        var package = "magetab-curation-scripts";
        var versions = ["1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/magetab-curation-scripts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/magetab-curation-scripts/README.html