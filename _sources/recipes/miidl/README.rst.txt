:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'miidl'
.. highlight: bash

miidl
=====

.. conda:recipe:: miidl
   :replaces_section_title:
   :noindex:

   Python package for identification of biomarkers powered by interpretable Convolutional Neural Networks

   :homepage: https://github.com/chunribu/miidl/
   :license: MIT / MIT
   :recipe: /`miidl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/miidl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/miidl/meta.yaml>`_

   


.. conda:package:: miidl

   |downloads_miidl| |docker_miidl|

   :versions:
      
      

      ``0.0.2-0``

      

   
   :depends pandas: 
   :depends python: 
   :depends pytorch: 
   :depends torchvision: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install miidl

   and update with::

      conda update miidl

   or use the docker container::

      docker pull quay.io/biocontainers/miidl:<tag>

   (see `miidl/tags`_ for valid values for ``<tag>``)


.. |downloads_miidl| image:: https://img.shields.io/conda/dn/bioconda/miidl.svg?style=flat
   :target: https://anaconda.org/bioconda/miidl
   :alt:   (downloads)
.. |docker_miidl| image:: https://quay.io/repository/biocontainers/miidl/status
   :target: https://quay.io/repository/biocontainers/miidl
.. _`miidl/tags`: https://quay.io/repository/biocontainers/miidl?tab=tags


.. raw:: html

    <script>
        var package = "miidl";
        var versions = ["0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/miidl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/miidl/README.html