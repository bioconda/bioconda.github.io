:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepmod'
.. highlight: bash

deepmod
=======

.. conda:recipe:: deepmod
   :replaces_section_title:
   :noindex:

   A deep\-learning method for DNA modifcation \(5mC and 6mA\) prediction.

   :homepage: https://github.com/WGLab/DeepMod
   :license: GPL3
   :recipe: /`deepmod <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepmod>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepmod/meta.yaml>`_

   


.. conda:package:: deepmod

   |downloads_deepmod| |docker_deepmod|

   :versions:
      
      

      ``0.1.3-1``,  ``0.1.3-0``

      

   
   :depends bwa: 
   :depends h5py: 
   :depends minimap2: 
   :depends numpy: 
   :depends python: 
   :depends r-base: ``>=3.6``
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends rpy2: 
   :depends samtools: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends tensorflow: ``1.7.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install deepmod

   and update with::

      conda update deepmod

   or use the docker container::

      docker pull quay.io/biocontainers/deepmod:<tag>

   (see `deepmod/tags`_ for valid values for ``<tag>``)


.. |downloads_deepmod| image:: https://img.shields.io/conda/dn/bioconda/deepmod.svg?style=flat
   :target: https://anaconda.org/bioconda/deepmod
   :alt:   (downloads)
.. |docker_deepmod| image:: https://quay.io/repository/biocontainers/deepmod/status
   :target: https://quay.io/repository/biocontainers/deepmod
.. _`deepmod/tags`: https://quay.io/repository/biocontainers/deepmod?tab=tags


.. raw:: html

    <script>
        var package = "deepmod";
        var versions = ["0.1.3","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepmod/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepmod/README.html