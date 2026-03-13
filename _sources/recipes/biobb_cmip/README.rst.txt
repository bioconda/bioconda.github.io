:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biobb_cmip'
.. highlight: bash

biobb_cmip
==========

.. conda:recipe:: biobb_cmip
   :replaces_section_title:
   :noindex:

   Biobb\_cmip is the Biobb module collection to compute classical molecular interaction potentials.

   :homepage: https://github.com/bioexcel/biobb_cmip
   :documentation: http://biobb-cmip.readthedocs.io/en/latest/
   
   :license: Apache-2.0 license
   :recipe: /`biobb_cmip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_cmip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_cmip/meta.yaml>`_

   \# biobb\_cmip

   \#\#\# Introduction
   Biobb\_cmip is the Biobb module collection to compute classical molecular interaction potentials. Biobb \(BioExcel building blocks\) packages are Python building blocks that create new layer of compatibility and interoperability over popular bioinformatics tools.
   The latest documentation of this package can be found in our readthedocs site\:
   \[latest API documentation\]\(http\:\/\/biobb\-cmip.readthedocs.io\/en\/latest\/\).


   \#\#\# Copyright \& Licensing
   This software has been developed in the \[MMB group\]\(http\:\/\/mmb.irbbarcelona.org\) at the \[BSC\]\(http\:\/\/www.bsc.es\/\) \& \[IRB\]\(https\:\/\/www.irbbarcelona.org\/\) for the \[European BioExcel\]\(http\:\/\/bioexcel.eu\/\)\, funded by the European Commission \(EU Horizon Europe \[101093290\]\(https\:\/\/cordis.europa.eu\/project\/id\/101093290\)\, EU H2020 \[823830\]\(http\:\/\/cordis.europa.eu\/projects\/823830\)\, EU H2020 \[675728\]\(http\:\/\/cordis.europa.eu\/projects\/675728\)\).

   \* \(c\) 2015\-2026 \[Barcelona Supercomputing Center\]\(https\:\/\/www.bsc.es\/\)
   \* \(c\) 2015\-2026 \[Institute for Research in Biomedicine\]\(https\:\/\/www.irbbarcelona.org\/\).
   Licensed under the
   \[Apache License 2.0\]\(https\:\/\/www.apache.org\/licenses\/LICENSE\-2.0\)\, see the file LICENSE for details.

   \!\[\]\(https\:\/\/bioexcel.eu\/wp\-content\/uploads\/2019\/04\/Bioexcell\_logo\_1080px\_transp.png \"Bioexcel\"\)





.. conda:package:: biobb_cmip

   |downloads_biobb_cmip| |docker_biobb_cmip|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.2.3-0</code>,  <code>5.2.2-0</code>,  <code>5.2.1-0</code>,  <code>5.2.0-0</code>,  <code>5.1.0-0</code>,  <code>5.0.0-0</code>,  <code>4.2.0-0</code>,  <code>4.1.1-0</code>,  <code>4.1.0-0</code>,  </span></summary>
      

      ``5.2.3-0``,  ``5.2.2-0``,  ``5.2.1-0``,  ``5.2.0-0``,  ``5.1.0-0``,  ``5.0.0-0``,  ``4.2.0-0``,  ``4.1.1-0``,  ``4.1.0-0``,  ``4.0.0-0``,  ``3.9.0-0``,  ``3.7.8-0``,  ``3.7.7-0``,  ``3.7.6-1``,  ``3.7.6-0``,  ``3.7.5-1``,  ``3.7.5-0``,  ``3.7.4-0``,  ``3.7.3-0``,  ``3.7.2-0``,  ``3.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biobb_common: ``5.2.2``
   :depends on biobb_structure_checking: ``3.15.6``
   :depends on cmip: ``2.7.0``
   :depends on mdanalysis: ``>=2.0.0``
   :depends on python: ``>=3.10``

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

    pixi global install biobb_cmip

to add into an existing workspace instead, run::

    pixi add biobb_cmip

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install biobb_cmip

Alternatively, to install into a new environment, run::

    conda create -n envname biobb_cmip

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/biobb_cmip:<tag>

(see `biobb_cmip/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_biobb_cmip| image:: https://img.shields.io/conda/dn/bioconda/biobb_cmip.svg?style=flat
   :target: https://anaconda.org/bioconda/biobb_cmip
   :alt:   (downloads)
.. |docker_biobb_cmip| image:: https://quay.io/repository/biocontainers/biobb_cmip/status
   :target: https://quay.io/repository/biocontainers/biobb_cmip
.. _`biobb_cmip/tags`: https://quay.io/repository/biocontainers/biobb_cmip?tab=tags


.. raw:: html

    <script>
        var package = "biobb_cmip";
        var versions = ["5.2.3","5.2.2","5.2.1","5.2.0","5.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biobb_cmip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biobb_cmip/README.html