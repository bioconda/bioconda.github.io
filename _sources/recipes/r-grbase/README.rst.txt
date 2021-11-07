:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-grbase'
.. highlight: bash

r-grbase
========

.. conda:recipe:: r-grbase
   :replaces_section_title:
   :noindex:

   The \'gRbase\' package provides graphical modelling features used by e.g. the packages \'gRain\'\, \'gRim\' and \'gRc\'. \'gRbase\' implements graph algorithms including \(i\) maximum cardinality search \(for marked and unmarked graphs\). \(ii\) moralization\, \(iii\) triangulation\, \(iv\) creation of junction tree. \'gRbase\' facilitates array operations\, \'gRbase\' implements functions for testing for conditional independence. \'gRbase\' illustrates how hierarchical log\-linear models may be implemented and describes concept of graphical meta data. The facilities of the package are documented in the book by Højsgaard\, Edwards and Lauritzen \(2012\, \<doi\:10.1007\/978\-1\-4614\-2299\-0\>\) and in the paper by Dethlefsen and Højsgaard\, \(2005\, \<doi\:10.18637\/jss.v014.i17\>\). Please see \'citation\(\"gRbase\"\)\' for citation details. NOTICE  \'gRbase\' requires that the packages graph\, \'Rgraphviz\' and \'RBGL\' are installed from \'bioconductor\'\; for installation instructions please refer to the web page given below.

   :homepage: http://people.math.aau.dk/~sorenh/software/gR/
   :license: GPL2 / GPL-2.0-or-later
   :recipe: /`r-grbase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-grbase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-grbase/meta.yaml>`_

   


.. conda:package:: r-grbase

   |downloads_r-grbase| |docker_r-grbase|

   :versions:
      
      

      ``1.8_6.7-1``,  ``1.8_6.7-0``,  ``1.8_3.4-6``,  ``1.8_3.4-5``,  ``1.8_3.4-4``,  ``1.8_3.4-3``,  ``1.8_3.4-2``,  ``1.8_3.4-1``,  ``1.8_3.4-0``

      

   
   :depends bioconductor-graph: 
   :depends bioconductor-rbgl: 
   :depends bioconductor-rgraphviz: 
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-igraph: 
   :depends r-magrittr: 
   :depends r-matrix: 
   :depends r-rcpp: ``>=0.11.1``
   :depends r-rcpparmadillo: 
   :depends r-rcppeigen: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-grbase

   and update with::

      conda update r-grbase

   or use the docker container::

      docker pull quay.io/biocontainers/r-grbase:<tag>

   (see `r-grbase/tags`_ for valid values for ``<tag>``)


.. |downloads_r-grbase| image:: https://img.shields.io/conda/dn/bioconda/r-grbase.svg?style=flat
   :target: https://anaconda.org/bioconda/r-grbase
   :alt:   (downloads)
.. |docker_r-grbase| image:: https://quay.io/repository/biocontainers/r-grbase/status
   :target: https://quay.io/repository/biocontainers/r-grbase
.. _`r-grbase/tags`: https://quay.io/repository/biocontainers/r-grbase?tab=tags


.. raw:: html

    <script>
        var package = "r-grbase";
        var versions = ["1.8_6.7","1.8_6.7","1.8_3.4","1.8_3.4","1.8_3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-grbase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-grbase/README.html