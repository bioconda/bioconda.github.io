:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mvcclass'
.. highlight: bash

bioconductor-mvcclass
=====================

.. conda:recipe:: bioconductor-mvcclass
   :replaces_section_title:

   Creates classes used in model\-view\-controller \(MVC\) design

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/MVCClass.html
   :license: LGPL
   :recipe: /`bioconductor-mvcclass <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mvcclass>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mvcclass/meta.yaml>`_
   :links: biotools: :biotools:`mvcclass`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-mvcclass

   |downloads_bioconductor-mvcclass| |docker_bioconductor-mvcclass|

   :versions: 1.56.0-0, 1.54.0-0, 1.52.0-0, 1.50.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mvcclass

   and update with::

      conda update bioconductor-mvcclass

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mvcclass:<tag>

   (see `bioconductor-mvcclass/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mvcclass| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mvcclass.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mvcclass| image:: https://quay.io/repository/biocontainers/bioconductor-mvcclass/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mvcclass
.. _`bioconductor-mvcclass/tags`: https://quay.io/repository/biocontainers/bioconductor-mvcclass?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mvcclass/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mvcclass/README.html