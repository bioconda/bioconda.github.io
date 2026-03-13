:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biobb_ml'
.. highlight: bash

biobb_ml
========

.. conda:recipe:: biobb_ml
   :replaces_section_title:
   :noindex:

   Biobb\_ml is the Biobb module collection to perform machine learning predictions.

   :homepage: https://github.com/bioexcel/biobb_ml
   :license: APACHE / Apache Software License
   :recipe: /`biobb_ml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_ml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_ml/meta.yaml>`_

   \# biobb\_ml

   \#\#\# Introduction
   Biobb\_ml is the Biobb module collection to perform machine learning predictions. 
   Biobb \(BioExcel building blocks\) packages are Python building blocks that
   create   new layer of compatibility and interoperability over popular
   bioinformatics tools.
   The latest documentation of this package can be found in our readthedocs site\:
   \[latest API documentation\]\(http\:\/\/biobb\_ml.readthedocs.io\/en\/latest\/\).


   \#\#\# Copyright \& Licensing
   This software has been developed in the \[MMB group\]\(https\:\/\/mmb.irbbarcelona.org\) at the \[BSC\]\(https\:\/\/www.bsc.es\/\) \& \[IRB\]\(https\:\/\/www.irbbarcelona.org\/\) for the \[European BioExcel\]\(http\:\/\/bioexcel.eu\/\)\, funded by the European Commission \(EU H2020 \[823830\]\(http\:\/\/cordis.europa.eu\/projects\/823830\)\, EU H2020 \[675728\]\(http\:\/\/cordis.europa.eu\/projects\/675728\)\).

   \* \(c\) 2015\-2024 \[Barcelona Supercomputing Center\]\(https\:\/\/www.bsc.es\/\)
   \* \(c\) 2015\-2024 \[Institute for Research in Biomedicine\]\(https\:\/\/www.irbbarcelona.org\/\)
   Licensed under the
   \[Apache License 2.0\]\(https\:\/\/www.apache.org\/licenses\/LICENSE\-2.0\)\, see the file LICENSE for details.

   \!\[\]\(https\:\/\/bioexcel.eu\/wp\-content\/uploads\/2019\/04\/Bioexcell\_logo\_1080px\_transp.png \"Bioexcel\"\)





.. conda:package:: biobb_ml

   |downloads_biobb_ml| |docker_biobb_ml|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.2.0-0</code>,  <code>4.1.0-0</code>,  <code>4.0.0-1</code>,  <code>4.0.0-0</code>,  <code>3.9.0-0</code>,  <code>3.8.0-0</code>,  <code>3.7.0-2</code>,  <code>3.7.0-1</code>,  <code>3.7.0-0</code>,  </span></summary>
      

      ``4.2.0-0``,  ``4.1.0-0``,  ``4.0.0-1``,  ``4.0.0-0``,  ``3.9.0-0``,  ``3.8.0-0``,  ``3.7.0-2``,  ``3.7.0-1``,  ``3.7.0-0``,  ``3.6.1-1``,  ``3.6.1-0``,  ``3.6.0-0``,  ``3.5.0-3``,  ``3.5.0-2``,  ``3.5.0-1``,  ``3.5.0-0``,  ``3.0.2-0``,  ``3.0.1-3``,  ``3.0.1-2``,  ``3.0.1-1``,  ``3.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biobb_common: ``4.2.0``
   :depends on h5py: ``2.10.0``
   :depends on imbalanced-learn: ``0.7.0``
   :depends on numpy: ``1.19.5``
   :depends on pandas: ``>=1.3.0``
   :depends on python: ``>=3.8``
   :depends on scikit-learn: ``0.24.2``
   :depends on seaborn: ``0.10.1``
   :depends on tensorflow: ``>=2.4.2``

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

    pixi global install biobb_ml

to add into an existing workspace instead, run::

    pixi add biobb_ml

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install biobb_ml

Alternatively, to install into a new environment, run::

    conda create -n envname biobb_ml

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/biobb_ml:<tag>

(see `biobb_ml/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_biobb_ml| image:: https://img.shields.io/conda/dn/bioconda/biobb_ml.svg?style=flat
   :target: https://anaconda.org/bioconda/biobb_ml
   :alt:   (downloads)
.. |docker_biobb_ml| image:: https://quay.io/repository/biocontainers/biobb_ml/status
   :target: https://quay.io/repository/biocontainers/biobb_ml
.. _`biobb_ml/tags`: https://quay.io/repository/biocontainers/biobb_ml?tab=tags


.. raw:: html

    <script>
        var package = "biobb_ml";
        var versions = ["4.2.0","4.1.0","4.0.0","4.0.0","3.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biobb_ml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biobb_ml/README.html