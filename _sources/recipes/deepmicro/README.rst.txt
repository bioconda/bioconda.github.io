:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepmicro'
.. highlight: bash

deepmicro
=========

.. conda:recipe:: deepmicro
   :replaces_section_title:
   :noindex:

   Deep representation learning framework

   :homepage: https://github.com/paulzierep/DeepMicro
   :license: MIT
   :recipe: /`deepmicro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepmicro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepmicro/meta.yaml>`_

   


.. conda:package:: deepmicro

   |downloads_deepmicro| |docker_deepmicro|

   :versions:
      
      

      ``1.4-1``,  ``1.4-0``,  ``1.3-0``,  ``1.2-0``

      

   
   :depends h5py: 
   :depends keras: ``>=2.3.0``
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends psutil: 
   :depends python: ``3.10.*``
   :depends scikit-learn: 
   :depends scipy: 
   :depends tensorflow: ``>=2.11.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install deepmicro

   and update with::

      conda update deepmicro

   or use the docker container::

      docker pull quay.io/biocontainers/deepmicro:<tag>

   (see `deepmicro/tags`_ for valid values for ``<tag>``)


.. |downloads_deepmicro| image:: https://img.shields.io/conda/dn/bioconda/deepmicro.svg?style=flat
   :target: https://anaconda.org/bioconda/deepmicro
   :alt:   (downloads)
.. |docker_deepmicro| image:: https://quay.io/repository/biocontainers/deepmicro/status
   :target: https://quay.io/repository/biocontainers/deepmicro
.. _`deepmicro/tags`: https://quay.io/repository/biocontainers/deepmicro?tab=tags


.. raw:: html

    <script>
        var package = "deepmicro";
        var versions = ["1.4","1.4","1.3","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepmicro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepmicro/README.html