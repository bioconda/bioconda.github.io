:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cassiopee'
.. highlight: bash

cassiopee
=========

.. conda:recipe:: cassiopee
   :replaces_section_title:
   :noindex:

   scan an input genomic sequence \(dna\/rna\/protein\) and search for a subsequence with exact match or allowing substitutions \(Hamming distance\) and\/or insertion\/deletions

   :homepage: https://github.com/osallou/cassiopee-c
   :license: GPL-3+
   :recipe: /`cassiopee <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cassiopee>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cassiopee/meta.yaml>`_

   


.. conda:package:: cassiopee

   |downloads_cassiopee| |docker_cassiopee|

   :versions:
      
      

      ``1.0.9-3``,  ``1.0.9-2``,  ``1.0.9-1``,  ``1.0.9-0``,  ``1.0.5-2``,  ``1.0.5-1``,  ``1.0.5-0``

      

   
   :depends boost: ``>=1.74.0,<1.74.1.0a0``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends glog: ``>=0.5.0,<0.6.0a0``
   :depends icu: ``>=69.1,<70.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cassiopee

   and update with::

      conda update cassiopee

   or use the docker container::

      docker pull quay.io/biocontainers/cassiopee:<tag>

   (see `cassiopee/tags`_ for valid values for ``<tag>``)


.. |downloads_cassiopee| image:: https://img.shields.io/conda/dn/bioconda/cassiopee.svg?style=flat
   :target: https://anaconda.org/bioconda/cassiopee
   :alt:   (downloads)
.. |docker_cassiopee| image:: https://quay.io/repository/biocontainers/cassiopee/status
   :target: https://quay.io/repository/biocontainers/cassiopee
.. _`cassiopee/tags`: https://quay.io/repository/biocontainers/cassiopee?tab=tags


.. raw:: html

    <script>
        var package = "cassiopee";
        var versions = ["1.0.9","1.0.9","1.0.9","1.0.9","1.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cassiopee/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cassiopee/README.html