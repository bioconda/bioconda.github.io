:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biobb_flexserv'
.. highlight: bash

biobb_flexserv
==============

.. conda:recipe:: biobb_flexserv
   :replaces_section_title:
   :noindex:

   Biobb\_flexserv is the Biobb module collection for biomolecular flexibility studies on protein 3D structures.

   :homepage: https://github.com/bioexcel/biobb_flexserv
   :license: APACHE / Apache Software License
   :recipe: /`biobb_flexserv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_flexserv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_flexserv/meta.yaml>`_

   biobb\_flexserv allows the generation of protein conformational ensembles from 3D structures and the analysis of its molecular flexibility. It is based on the work included in the FlexServ server \(https\:\/\/mmb.irbbarcelona.org\/FlexServ\/\, Camps et. al.\, FlexServ\: an integrated tool for the analysis of protein flexibility\, Bioinformatics\, Volume 25\, Issue 13\, 1 July 2009\, Pages 1709–1710\, https\:\/\/doi.org\/10.1093\/bioinformatics\/btp304\).
   Biobb \(BioExcel building blocks\) packages are Python building blocks that
   create new layer of compatibility and interoperability over popular
     bioinformatics tools.
   The latest documentation of this package can be found in our readthedocs site\: http\:\/\/biobb\_vs.readthedocs.io\/en\/latest\/\).



.. conda:package:: biobb_flexserv

   |downloads_biobb_flexserv| |docker_biobb_flexserv|

   :versions:
      
      

      ``3.9.1-0``

      

   
   :depends biobb_common: ``3.9.0``
   :depends flexserv: ``1.0.2``
   :depends python: ``>=3.7,<3.10``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biobb_flexserv

   and update with::

      conda update biobb_flexserv

   or use the docker container::

      docker pull quay.io/biocontainers/biobb_flexserv:<tag>

   (see `biobb_flexserv/tags`_ for valid values for ``<tag>``)


.. |downloads_biobb_flexserv| image:: https://img.shields.io/conda/dn/bioconda/biobb_flexserv.svg?style=flat
   :target: https://anaconda.org/bioconda/biobb_flexserv
   :alt:   (downloads)
.. |docker_biobb_flexserv| image:: https://quay.io/repository/biocontainers/biobb_flexserv/status
   :target: https://quay.io/repository/biocontainers/biobb_flexserv
.. _`biobb_flexserv/tags`: https://quay.io/repository/biocontainers/biobb_flexserv?tab=tags


.. raw:: html

    <script>
        var package = "biobb_flexserv";
        var versions = ["3.9.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biobb_flexserv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biobb_flexserv/README.html