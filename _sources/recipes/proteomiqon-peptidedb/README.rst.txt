:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'proteomiqon-peptidedb'
.. highlight: bash

proteomiqon-peptidedb
=====================

.. conda:recipe:: proteomiqon-peptidedb
   :replaces_section_title:
   :noindex:

   The tool ProteomIQon.PeptideDB creates a peptide database in the SQLite format.

   :homepage: https://csbiology.github.io/ProteomIQon/
   :documentation: https://csbiology.github.io/ProteomIQon/tools/PeptideDB.html
   
   :developer docs: https://github.com/CSBiology/ProteomIQon
   :license: MIT
   :recipe: /`proteomiqon-peptidedb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteomiqon-peptidedb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteomiqon-peptidedb/meta.yaml>`_

   MS\-based shotgun proteomics estimates protein abundances using a proxy\: peptides. 
   An established method to identify acquired MS\/MS spectra is the comparison of each spectrum with peptides in a reference database. 
   The PeptideDB tool helps to create peptide databases by in silico digestion given proteome information in the FASTA format and a set of parameters that 
   allow the user to mimic conditions of their specific experiment. The created database stores peptide protein relationships in a SQLite database which can 
   then be supplied to other ProteomIQon tools.



.. conda:package:: proteomiqon-peptidedb

   |downloads_proteomiqon-peptidedb| |docker_proteomiqon-peptidedb|

   :versions:
      
      

      ``0.0.7-0``,  ``0.0.6-0``,  ``0.0.4-0``,  ``0.0.1-0``

      

   
   :depends dotnet-runtime: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install proteomiqon-peptidedb

   and update with::

      conda update proteomiqon-peptidedb

   or use the docker container::

      docker pull quay.io/biocontainers/proteomiqon-peptidedb:<tag>

   (see `proteomiqon-peptidedb/tags`_ for valid values for ``<tag>``)


.. |downloads_proteomiqon-peptidedb| image:: https://img.shields.io/conda/dn/bioconda/proteomiqon-peptidedb.svg?style=flat
   :target: https://anaconda.org/bioconda/proteomiqon-peptidedb
   :alt:   (downloads)
.. |docker_proteomiqon-peptidedb| image:: https://quay.io/repository/biocontainers/proteomiqon-peptidedb/status
   :target: https://quay.io/repository/biocontainers/proteomiqon-peptidedb
.. _`proteomiqon-peptidedb/tags`: https://quay.io/repository/biocontainers/proteomiqon-peptidedb?tab=tags


.. raw:: html

    <script>
        var package = "proteomiqon-peptidedb";
        var versions = ["0.0.7","0.0.6","0.0.4","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/proteomiqon-peptidedb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/proteomiqon-peptidedb/README.html