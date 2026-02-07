:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tidysbml'
.. highlight: bash

bioconductor-tidysbml
=====================

.. conda:recipe:: bioconductor-tidysbml
   :replaces_section_title:
   :noindex:

   Extract SBML\'s data into dataframes

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/tidysbml.html
   :license: CC BY 4.0
   :recipe: /`bioconductor-tidysbml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tidysbml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tidysbml/meta.yaml>`_

   Starting from one SBML file\, it extracts information from each listOfCompartments\, listOfSpecies and listOfReactions element by saving them into data frames. Each table provides one row for each entity \(i.e. either compartment\, species\, reaction or speciesReference\) and one set of columns for the attributes\, one column for the content of the \'notes\' subelement and one set of columns for the content of the \'annotation\' subelement.


.. conda:package:: bioconductor-tidysbml

   |downloads_bioconductor-tidysbml| |docker_bioconductor-tidysbml|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.5,<4.6.0a0``
   :depends r-xml2: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-tidysbml

   and update with::

      mamba update bioconductor-tidysbml

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tidysbml

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tidysbml:<tag>

   (see `bioconductor-tidysbml/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tidysbml| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tidysbml.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tidysbml
   :alt:   (downloads)
.. |docker_bioconductor-tidysbml| image:: https://quay.io/repository/biocontainers/bioconductor-tidysbml/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tidysbml
.. _`bioconductor-tidysbml/tags`: https://quay.io/repository/biocontainers/bioconductor-tidysbml?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tidysbml";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tidysbml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tidysbml/README.html