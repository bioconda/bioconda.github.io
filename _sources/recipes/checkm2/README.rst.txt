:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'checkm2'
.. highlight: bash

checkm2
=======

.. conda:recipe:: checkm2
   :replaces_section_title:
   :noindex:

   CheckM2 \- Predicting the quality of metagenome\-recovered bins

   :homepage: https://github.com/chklovski/CheckM2
   :license: GPL-3.0
   :recipe: /`checkm2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/checkm2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/checkm2/meta.yaml>`_

   


.. conda:package:: checkm2

   |downloads_checkm2| |docker_checkm2|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends diamond: ``2.0.4.*``
   :depends h5py: ``2.10.0.*``
   :depends lightgbm: ``3.2.1.*``
   :depends numpy: ``1.19.2.*``
   :depends packaging: 
   :depends pandas: ``<=1.4.0``
   :depends prodigal: ``>=2.6.3``
   :depends python: ``>=3.6,<3.9``
   :depends requests: 
   :depends scikit-learn: ``0.23.2.*``
   :depends scipy: 
   :depends setuptools: 
   :depends tensorflow: ``>=2.1.0,<2.6.0``
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install checkm2

   and update with::

      conda update checkm2

   or use the docker container::

      docker pull quay.io/biocontainers/checkm2:<tag>

   (see `checkm2/tags`_ for valid values for ``<tag>``)


.. |downloads_checkm2| image:: https://img.shields.io/conda/dn/bioconda/checkm2.svg?style=flat
   :target: https://anaconda.org/bioconda/checkm2
   :alt:   (downloads)
.. |docker_checkm2| image:: https://quay.io/repository/biocontainers/checkm2/status
   :target: https://quay.io/repository/biocontainers/checkm2
.. _`checkm2/tags`: https://quay.io/repository/biocontainers/checkm2?tab=tags


.. raw:: html

    <script>
        var package = "checkm2";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/checkm2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/checkm2/README.html