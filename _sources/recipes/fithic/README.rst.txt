:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fithic'
.. highlight: bash

fithic
======

.. conda:recipe:: fithic
   :replaces_section_title:
   :noindex:

   Fit\-Hi\-C is a tool for assigning statistical confidence estimates to chromosomal contact maps produced by genome architecture assays.

   :homepage: https://github.com/ay-lab/fithic/tree/master
   :license: MIT
   :recipe: /`fithic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fithic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fithic/meta.yaml>`_

   


.. conda:package:: fithic

   |downloads_fithic| |docker_fithic|

   :versions:
      
      

      ``2.0.7-0``,  ``2.0.6-0``,  ``2.0.5-0``

      

   
   :depends argparse: 
   :depends matplotlib: 
   :depends numpy: 
   :depends python: ``>=3``
   :depends scikit-learn: 
   :depends scipy: 
   :depends sortedcontainers: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fithic

   and update with::

      conda update fithic

   or use the docker container::

      docker pull quay.io/biocontainers/fithic:<tag>

   (see `fithic/tags`_ for valid values for ``<tag>``)


.. |downloads_fithic| image:: https://img.shields.io/conda/dn/bioconda/fithic.svg?style=flat
   :target: https://anaconda.org/bioconda/fithic
   :alt:   (downloads)
.. |docker_fithic| image:: https://quay.io/repository/biocontainers/fithic/status
   :target: https://quay.io/repository/biocontainers/fithic
.. _`fithic/tags`: https://quay.io/repository/biocontainers/fithic?tab=tags


.. raw:: html

    <script>
        var package = "fithic";
        var versions = ["2.0.7","2.0.6","2.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fithic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fithic/README.html