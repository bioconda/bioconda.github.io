:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biobb_morph'
.. highlight: bash

biobb_morph
===========

.. conda:recipe:: biobb_morph
   :replaces_section_title:
   :noindex:

   biobb\_morph is the Biobb module collection to perform molecular dynamics simulations using the morph MD suite.

   :homepage: https://github.com/bioexcel/biobb_morph
   :documentation: http://biobb_morph.readthedocs.io/en/latest/
   
   :license: APACHE / Apache Software License
   :recipe: /`biobb_morph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_morph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_morph/meta.yaml>`_

   \# biobb\_morph

   \#\#\# Introduction
   Biobb\_morph is the Biobb module collection. 
   Biobb \(BioExcel building blocks\) packages are Python building blocks that
   create new layer of compatibility and interoperability over popular
   bioinformatics tools.
   The latest documentation of this package can be found in our readthedocs site\:
   \[latest API documentation\]\(http\:\/\/biobb\-morph.readthedocs.io\/en\/latest\/\).


   \#\#\# Copyright \& Licensing
   This software has been developed in the \[MMB group\]\(http\:\/\/mmb.irbbarcelona.org\) at the \[BSC\]\(http\:\/\/www.bsc.es\/\) \& \[IRB\]\(https\:\/\/www.irbbarcelona.org\/\) for the \[European BioExcel\]\(http\:\/\/bioexcel.eu\/\)\, funded by the European Commission \(EU H2020 \[823830\]\(http\:\/\/cordis.europa.eu\/projects\/823830\)\, EU H2020 \[675728\]\(http\:\/\/cordis.europa.eu\/projects\/675728\)\).

   \* \(c\) 2015\-2024 \[Barcelona Supercomputing Center\]\(https\:\/\/www.bsc.es\/\)
   \* \(c\) 2015\-2024 \[Institute for Research in Biomedicine\]\(https\:\/\/www.irbbarcelona.org\/\)
   Licensed under the
   \[Apache License 2.0\]\(https\:\/\/www.apache.org\/licenses\/LICENSE\-2.0\)\, see the file LICENSE for details.

   \!\[\]\(https\:\/\/bioexcel.eu\/wp\-content\/uploads\/2019\/04\/Bioexcell\_logo\_1080px\_transp.png \"Bioexcel\"\)





.. conda:package:: biobb_morph

   |downloads_biobb_morph| |docker_biobb_morph|

   :versions:
      
      

      ``5.0.1-0``,  ``5.0.0-0``

      

   
   :depends on biobb_common: ``5.0.0``
   :depends on matplotlib-base: 
   :depends on meshio: 
   :depends on numpy: 
   :depends on numpy-stl: 
   :depends on python: ``>=3.9``
   :depends on pytorch: 
   :depends on rtree: 
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on trimesh: 

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

    pixi global install biobb_morph

to add into an existing workspace instead, run::

    pixi add biobb_morph

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install biobb_morph

Alternatively, to install into a new environment, run::

    conda create -n envname biobb_morph

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/biobb_morph:<tag>

(see `biobb_morph/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_biobb_morph| image:: https://img.shields.io/conda/dn/bioconda/biobb_morph.svg?style=flat
   :target: https://anaconda.org/bioconda/biobb_morph
   :alt:   (downloads)
.. |docker_biobb_morph| image:: https://quay.io/repository/biocontainers/biobb_morph/status
   :target: https://quay.io/repository/biocontainers/biobb_morph
.. _`biobb_morph/tags`: https://quay.io/repository/biocontainers/biobb_morph?tab=tags


.. raw:: html

    <script>
        var package = "biobb_morph";
        var versions = ["5.0.1","5.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biobb_morph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biobb_morph/README.html