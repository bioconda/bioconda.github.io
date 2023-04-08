:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'brooklyn_plot'
.. highlight: bash

brooklyn_plot
=============

.. conda:recipe:: brooklyn_plot
   :replaces_section_title:
   :noindex:

   Gene co\-expression and transcriptional bursting pattern recognition tool in single cell\/nucleus RNA\-sequencing data

   :homepage: https://github.com/arunhpatil/brooklyn/
   :documentation: https://brooklyn-plot.readthedocs.io/
   
   :license: MIT / MIT
   :recipe: /`brooklyn_plot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/brooklyn_plot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/brooklyn_plot/meta.yaml>`_

   Gene co\-expression and transcriptional bursting pattern recognition tool in single cell\/nucleus RNA\-sequencing data


.. conda:package:: brooklyn_plot

   |downloads_brooklyn_plot| |docker_brooklyn_plot|

   :versions:
      
      

      ``0.0.3-0``

      

   
   :depends numpy: ``<1.24``
   :depends pandas: 
   :depends python: ``>=3.6``
   :depends scanpy: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install brooklyn_plot

   and update with::

      conda update brooklyn_plot

   or use the docker container::

      docker pull quay.io/biocontainers/brooklyn_plot:<tag>

   (see `brooklyn_plot/tags`_ for valid values for ``<tag>``)


.. |downloads_brooklyn_plot| image:: https://img.shields.io/conda/dn/bioconda/brooklyn_plot.svg?style=flat
   :target: https://anaconda.org/bioconda/brooklyn_plot
   :alt:   (downloads)
.. |docker_brooklyn_plot| image:: https://quay.io/repository/biocontainers/brooklyn_plot/status
   :target: https://quay.io/repository/biocontainers/brooklyn_plot
.. _`brooklyn_plot/tags`: https://quay.io/repository/biocontainers/brooklyn_plot?tab=tags


.. raw:: html

    <script>
        var package = "brooklyn_plot";
        var versions = ["0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/brooklyn_plot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/brooklyn_plot/README.html