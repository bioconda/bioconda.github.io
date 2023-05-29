:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cpc2'
.. highlight: bash

cpc2
====

.. conda:recipe:: cpc2
   :replaces_section_title:
   :noindex:

   Coding Potential Calculator 2 \(CPC2\)

   :homepage: https://github.com/gao-lab/CPC2_standalone
   :license: MIT
   :recipe: /`cpc2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cpc2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cpc2/meta.yaml>`_

   CPC2 a fast and accurate coding potential calculator based on sequence intrinsic features.


.. conda:package:: cpc2

   |downloads_cpc2| |docker_cpc2|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends biopython: 
   :depends libsvm: 
   :depends python: 
   :depends six: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cpc2

   and update with::

      conda update cpc2

   or use the docker container::

      docker pull quay.io/biocontainers/cpc2:<tag>

   (see `cpc2/tags`_ for valid values for ``<tag>``)


.. |downloads_cpc2| image:: https://img.shields.io/conda/dn/bioconda/cpc2.svg?style=flat
   :target: https://anaconda.org/bioconda/cpc2
   :alt:   (downloads)
.. |docker_cpc2| image:: https://quay.io/repository/biocontainers/cpc2/status
   :target: https://quay.io/repository/biocontainers/cpc2
.. _`cpc2/tags`: https://quay.io/repository/biocontainers/cpc2?tab=tags


.. raw:: html

    <script>
        var package = "cpc2";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cpc2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cpc2/README.html