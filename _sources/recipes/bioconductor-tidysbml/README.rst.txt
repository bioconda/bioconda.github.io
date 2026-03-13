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

      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-xml2: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install bioconductor-tidysbml

to add into an existing workspace instead, run::

    pixi add bioconductor-tidysbml

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-tidysbml

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-tidysbml

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-tidysbml:<tag>

(see `bioconductor-tidysbml/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
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