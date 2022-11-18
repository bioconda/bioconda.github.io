:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ciriquant'
.. highlight: bash

ciriquant
=========

.. conda:recipe:: ciriquant
   :replaces_section_title:
   :noindex:

   circular RNA quantification pipeline

   :homepage: https://github.com/bioinfo-biols/CIRIquant
   :license: MIT
   :recipe: /`ciriquant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ciriquant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ciriquant/meta.yaml>`_

   


.. conda:package:: ciriquant

   |downloads_ciriquant| |docker_ciriquant|

   :versions:
      
      

      ``1.1.2-0``

      

   
   :depends argparse: 
   :depends numexpr: 
   :depends numpy: 
   :depends pysam: 
   :depends python: ``2.7.15``
   :depends pyyaml: 
   :depends scikit-learn: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ciriquant

   and update with::

      conda update ciriquant

   or use the docker container::

      docker pull quay.io/biocontainers/ciriquant:<tag>

   (see `ciriquant/tags`_ for valid values for ``<tag>``)


.. |downloads_ciriquant| image:: https://img.shields.io/conda/dn/bioconda/ciriquant.svg?style=flat
   :target: https://anaconda.org/bioconda/ciriquant
   :alt:   (downloads)
.. |docker_ciriquant| image:: https://quay.io/repository/biocontainers/ciriquant/status
   :target: https://quay.io/repository/biocontainers/ciriquant
.. _`ciriquant/tags`: https://quay.io/repository/biocontainers/ciriquant?tab=tags


.. raw:: html

    <script>
        var package = "ciriquant";
        var versions = ["1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ciriquant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ciriquant/README.html