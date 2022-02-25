:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dagchainer'
.. highlight: bash

dagchainer
==========

.. conda:recipe:: dagchainer
   :replaces_section_title:
   :noindex:

   DAGchainer identifies syntenic regions.

   :homepage: https://github.com/kullrich/dagchainer
   :license: MIT
   :recipe: /`dagchainer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dagchainer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dagchainer/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/bth397`

   DAGchainer identifies chains of gene pairs sharing conserved order between genomic regions\, by identifying paths through a directed acyclic graph \(DAG\).


.. conda:package:: dagchainer

   |downloads_dagchainer| |docker_dagchainer|

   :versions:
      
      

      ``r120920-2``,  ``r120920-1``,  ``r120920-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends perl-carp: 
   :depends perl-data-dumper: 
   :depends perl-getopt-long: 
   :depends perl-local-lib: 
   :depends perl-storable: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dagchainer

   and update with::

      conda update dagchainer

   or use the docker container::

      docker pull quay.io/biocontainers/dagchainer:<tag>

   (see `dagchainer/tags`_ for valid values for ``<tag>``)


.. |downloads_dagchainer| image:: https://img.shields.io/conda/dn/bioconda/dagchainer.svg?style=flat
   :target: https://anaconda.org/bioconda/dagchainer
   :alt:   (downloads)
.. |docker_dagchainer| image:: https://quay.io/repository/biocontainers/dagchainer/status
   :target: https://quay.io/repository/biocontainers/dagchainer
.. _`dagchainer/tags`: https://quay.io/repository/biocontainers/dagchainer?tab=tags


.. raw:: html

    <script>
        var package = "dagchainer";
        var versions = ["r120920","r120920","r120920"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dagchainer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dagchainer/README.html