:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metagraph'
.. highlight: bash

metagraph
=========

.. conda:recipe:: metagraph
   :replaces_section_title:
   :noindex:

   Ultra Scalable Framework for DNA Search\, Alignment\, Assembly

   :homepage: https://github.com/ratschlab/metagraph
   :documentation: https://metagraph.ethz.ch
   
   :license: MIT / MIT
   :recipe: /`metagraph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metagraph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metagraph/meta.yaml>`_

   The MetaGraph framework allows for indexing and analysis of very large biological sequence collections\, producing compressed indexes that can represent several petabases of input data. The indexes can be efficiently queried with any query sequence of interest.



.. conda:package:: metagraph

   |downloads_metagraph| |docker_metagraph|

   :versions:
      
      

      ``0.3.2-0``,  ``0.2.0-0``,  ``0.1.0-2``,  ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends htslib: ``>=1.12,<1.13.0a0``
   :depends jemalloc: 
   :depends libgcc-ng: ``>=9.4.0``
   :depends libgomp: 
   :depends libjemalloc: ``>=5.2.1``
   :depends libstdcxx-ng: ``>=9.4.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metagraph

   and update with::

      conda update metagraph

   or use the docker container::

      docker pull quay.io/biocontainers/metagraph:<tag>

   (see `metagraph/tags`_ for valid values for ``<tag>``)


.. |downloads_metagraph| image:: https://img.shields.io/conda/dn/bioconda/metagraph.svg?style=flat
   :target: https://anaconda.org/bioconda/metagraph
   :alt:   (downloads)
.. |docker_metagraph| image:: https://quay.io/repository/biocontainers/metagraph/status
   :target: https://quay.io/repository/biocontainers/metagraph
.. _`metagraph/tags`: https://quay.io/repository/biocontainers/metagraph?tab=tags


.. raw:: html

    <script>
        var package = "metagraph";
        var versions = ["0.3.2","0.2.0","0.1.0","0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metagraph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metagraph/README.html