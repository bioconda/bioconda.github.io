:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowcut'
.. highlight: bash

bioconductor-flowcut
====================

.. conda:recipe:: bioconductor-flowcut
   :replaces_section_title:
   :noindex:

   Precise and Accurate Automated Removal of Outlier Events and Flagging of Files Based on Time Versus Fluorescence Analysis

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/flowCut.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowcut <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowcut>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowcut/meta.yaml>`_

   Common techinical complications such as clogging can result in spurious events and fluorescence intensity shifting\, flowCut is designed to detect and remove technical artifacts from your data by removing segments that show statistical differences from other segments.


.. conda:package:: bioconductor-flowcut

   |downloads_bioconductor-flowcut| |docker_bioconductor-flowcut|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-flowcore: ``>=2.4.0,<2.5.0``
   :depends bioconductor-flowdensity: ``>=1.26.0,<1.27.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-cairo: 
   :depends r-e1071: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowcut

   and update with::

      conda update bioconductor-flowcut

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowcut:<tag>

   (see `bioconductor-flowcut/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowcut| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowcut.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowcut
   :alt:   (downloads)
.. |docker_bioconductor-flowcut| image:: https://quay.io/repository/biocontainers/bioconductor-flowcut/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowcut
.. _`bioconductor-flowcut/tags`: https://quay.io/repository/biocontainers/bioconductor-flowcut?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowcut/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowcut/README.html