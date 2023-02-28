:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'strainest'
.. highlight: bash

strainest
=========

.. conda:recipe:: strainest
   :replaces_section_title:
   :noindex:

   Abundance estimation of strains

   :homepage: https://github.com/compmetagen/strainest
   :license: GPL / GPL-3.0
   :recipe: /`strainest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strainest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strainest/meta.yaml>`_

   


.. conda:package:: strainest

   |downloads_strainest| |docker_strainest|

   :versions:
      
      

      ``1.2.4-4``,  ``1.2.4-3``,  ``1.2.4-2``,  ``1.2.4-0``,  ``1.2.2-0``

      

   
   :depends biopython: ``>=1.50``
   :depends click: ``>=5.1``
   :depends libcxx: ``>=9.0.1``
   :depends matplotlib: ``>=1.3.0``
   :depends mummer: ``3.23.*``
   :depends numpy: ``>=1.7.0``
   :depends pandas: 
   :depends pysam: ``>=0.9``
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends scikit-learn: ``>=0.16.1``
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install strainest

   and update with::

      conda update strainest

   or use the docker container::

      docker pull quay.io/biocontainers/strainest:<tag>

   (see `strainest/tags`_ for valid values for ``<tag>``)


.. |downloads_strainest| image:: https://img.shields.io/conda/dn/bioconda/strainest.svg?style=flat
   :target: https://anaconda.org/bioconda/strainest
   :alt:   (downloads)
.. |docker_strainest| image:: https://quay.io/repository/biocontainers/strainest/status
   :target: https://quay.io/repository/biocontainers/strainest
.. _`strainest/tags`: https://quay.io/repository/biocontainers/strainest?tab=tags


.. raw:: html

    <script>
        var package = "strainest";
        var versions = ["1.2.4","1.2.4","1.2.4","1.2.4","1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/strainest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/strainest/README.html