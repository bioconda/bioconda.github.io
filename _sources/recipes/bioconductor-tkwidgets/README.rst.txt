.. title:: Package Recipe 'bioconductor-tkwidgets'
.. highlight: bash


bioconductor-tkwidgets
======================

.. conda:recipe:: bioconductor-tkwidgets
   :replaces_section_title:

   Widgets to provide user interfaces. tcltk should have been installed for the widgets to run.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/tkWidgets.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-tkwidgets <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tkwidgets>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tkwidgets/meta.yaml>`_

   


.. conda:package:: bioconductor-tkwidgets

   |downloads_bioconductor-tkwidgets| |docker_bioconductor-tkwidgets|

   :versions: 1.60.0

   :depends: :conda:package:`bioconductor-dyndoc` >=1.60.0,<1.61.0 :conda:package:`bioconductor-widgettools` >=1.60.0,<1.61.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-tkwidgets|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tkwidgets

   and update with::

      conda update bioconductor-tkwidgets

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-tkwidgets


.. |required_by_bioconductor-tkwidgets| conda:required_by:: bioconductor-tkwidgets
.. |downloads_bioconductor-tkwidgets| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tkwidgets.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-tkwidgets| image:: https://quay.io/repository/biocontainers/bioconductor-tkwidgets/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tkwidgets







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tkwidgets/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tkwidgets/README.html

