:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'linearpartition'
.. highlight: bash

linearpartition
===============

.. conda:recipe:: linearpartition
   :replaces_section_title:
   :noindex:

   Linear\-Time Approximation of RNA Folding Partition Function and Base Pairing Probabilities

   :homepage: https://github.com/LinearFold/LinearPartition
   :license: custom
   :recipe: /`linearpartition <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/linearpartition>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/linearpartition/meta.yaml>`_

   


.. conda:package:: linearpartition

   |downloads_linearpartition| |docker_linearpartition|

   :versions:
      
      

      ``1.0-1``,  ``1.0-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``2.7.*``
   :depends python-gflags: 
   :depends seaborn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install linearpartition

   and update with::

      conda update linearpartition

   or use the docker container::

      docker pull quay.io/biocontainers/linearpartition:<tag>

   (see `linearpartition/tags`_ for valid values for ``<tag>``)


.. |downloads_linearpartition| image:: https://img.shields.io/conda/dn/bioconda/linearpartition.svg?style=flat
   :target: https://anaconda.org/bioconda/linearpartition
   :alt:   (downloads)
.. |docker_linearpartition| image:: https://quay.io/repository/biocontainers/linearpartition/status
   :target: https://quay.io/repository/biocontainers/linearpartition
.. _`linearpartition/tags`: https://quay.io/repository/biocontainers/linearpartition?tab=tags


.. raw:: html

    <script>
        var package = "linearpartition";
        var versions = ["1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/linearpartition/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/linearpartition/README.html