:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-rspectral'
.. highlight: bash

r-rspectral
===========

.. conda:recipe:: r-rspectral
   :replaces_section_title:
   :noindex:

   Implements the network clustering algorithm described in Newman \(2006\) \<doi\:10.1103\/PhysRevE.74.036104\>. The complete iterative algorithm comprises of two steps. In the first step\, the network is expressed in terms of its leading eigenvalue and eigenvector and recursively partition into two communities. Partitioning occurs if the maximum positive eigenvalue is greater than the tolerance \(10e\-5\) for the current partition\, and if it results in a positive contribution to the Modularity. Given an initial separation using the leading eigen step\, \'rSpectral\' then continues to maximise for the change in Modularity using a fine\-tuning step \- or variate thereof. The first stage here is to find the node which\, when moved from one community to another\, gives the maximum change in Modularity. This node’s community is then fixed and we repeat the process until all nodes have been moved. The whole process is repeated from this new state until the change in the Modularity\, between the new and old state\, is less than the predefined tolerance. A slight variant of the fine\-tuning step\, which can improve speed of the calculation\, is also provided. Instead of moving each node into each community in turn\, we only consider moves of neighbouring nodes\, found in different communities\, to the community of the current node of interest. The two steps process is repeatedly applied to each new community found\, subdivided each community into two new communities\, until we are unable to find any division that results in a positive change in Modularity.

   :homepage: https://github.com/cmclean5/rSpectral
   :license: GPL2 / GPL-2
   :recipe: /`r-rspectral <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rspectral>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rspectral/meta.yaml>`_

   


.. conda:package:: r-rspectral

   |downloads_r-rspectral| |docker_r-rspectral|

   :versions:
      
      

      ``1.0.0.10-2``,  ``1.0.0.10-1``,  ``1.0.0.10-0``,  ``1.0.0.9-0``

      

   
   :depends bioconductor-graph: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-igraph: 
   :depends r-rcpp: ``>=1.0.8.3``
   :depends r-rcpparmadillo: ``>=0.11.2.0.0``
   :depends r-rdpack: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-rspectral

   and update with::

      conda update r-rspectral

   or use the docker container::

      docker pull quay.io/biocontainers/r-rspectral:<tag>

   (see `r-rspectral/tags`_ for valid values for ``<tag>``)


.. |downloads_r-rspectral| image:: https://img.shields.io/conda/dn/bioconda/r-rspectral.svg?style=flat
   :target: https://anaconda.org/bioconda/r-rspectral
   :alt:   (downloads)
.. |docker_r-rspectral| image:: https://quay.io/repository/biocontainers/r-rspectral/status
   :target: https://quay.io/repository/biocontainers/r-rspectral
.. _`r-rspectral/tags`: https://quay.io/repository/biocontainers/r-rspectral?tab=tags


.. raw:: html

    <script>
        var package = "r-rspectral";
        var versions = ["1.0.0.10","1.0.0.10","1.0.0.10","1.0.0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-rspectral/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-rspectral/README.html