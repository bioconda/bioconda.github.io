:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rsbml'
.. highlight: bash

bioconductor-rsbml
==================

.. conda:recipe:: bioconductor-rsbml
   :replaces_section_title:

   Links R to libsbml for SBML parsing\, validating output\, provides an S4 SBML DOM\, converts SBML to R graph objects. Optionally links to the SBML ODE Solver Library \(SOSLib\) for simulating models.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/rsbml.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rsbml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rsbml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rsbml/meta.yaml>`_

   


.. conda:package:: bioconductor-rsbml

   |downloads_bioconductor-rsbml| |docker_bioconductor-rsbml|

   :versions: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rsbml

   and update with::

      conda update bioconductor-rsbml

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rsbml:<tag>

   (see `bioconductor-rsbml/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rsbml| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rsbml.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rsbml
   :alt:   (downloads)
.. |docker_bioconductor-rsbml| image:: https://quay.io/repository/biocontainers/bioconductor-rsbml/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rsbml
.. _`bioconductor-rsbml/tags`: https://quay.io/repository/biocontainers/bioconductor-rsbml?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rsbml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rsbml/README.html