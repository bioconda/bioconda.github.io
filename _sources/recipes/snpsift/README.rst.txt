:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snpsift'
.. highlight: bash

snpsift
=======

.. conda:recipe:: snpsift
   :replaces_section_title:
   :noindex:

   Toolbox that allows you to filter and manipulate annotated files

   :homepage: http://snpeff.sourceforge.net/SnpSift.html
   :license: LGPLv3
   :recipe: /`snpsift <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snpsift>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snpsift/meta.yaml>`_
   :links: biotools: :biotools:`SnpSift`, doi: :doi:`10.3389/fgene.2012.00035`

   


.. conda:package:: snpsift

   |downloads_snpsift| |docker_snpsift|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.4.0c-0</code>,  <code>5.4.0a-0</code>,  <code>5.3.0a-0</code>,  <code>5.2-0</code>,  <code>5.1-0</code>,  <code>5.1d-0</code>,  <code>4.3.1t-3</code>,  <code>4.3.1t-2</code>,  <code>4.3.1t-1</code>,  </span></summary>
      

      ``5.4.0c-0``,  ``5.4.0a-0``,  ``5.3.0a-0``,  ``5.2-0``,  ``5.1-0``,  ``5.1d-0``,  ``4.3.1t-3``,  ``4.3.1t-2``,  ``4.3.1t-1``,  ``4.3.1t-0``,  ``4.3.1r-0``,  ``4.3.1p-0``,  ``4.3.1o-0``,  ``4.3.1m-0``,  ``4.3-2``,  ``4.3-1``,  ``4.2-5``,  ``4.2-4``,  ``4.2-3``,  ``4.2-2``,  ``4.2-1``,  ``4.1l-4``,  ``4.1l-3``,  ``4.1l-1``

      
      .. raw:: html

         </details>
      

   
   :depends on openjdk: ``>=21``
   :depends on perl: 
   :depends on python: 

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

    pixi global install snpsift

to add into an existing workspace instead, run::

    pixi add snpsift

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install snpsift

Alternatively, to install into a new environment, run::

    conda create -n envname snpsift

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/snpsift:<tag>

(see `snpsift/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_snpsift| image:: https://img.shields.io/conda/dn/bioconda/snpsift.svg?style=flat
   :target: https://anaconda.org/bioconda/snpsift
   :alt:   (downloads)
.. |docker_snpsift| image:: https://quay.io/repository/biocontainers/snpsift/status
   :target: https://quay.io/repository/biocontainers/snpsift
.. _`snpsift/tags`: https://quay.io/repository/biocontainers/snpsift?tab=tags


.. raw:: html

    <script>
        var package = "snpsift";
        var versions = ["5.4.0c","5.4.0a","5.3.0a","5.2","5.1"];
    </script>





Notes
-----
The tool is available as command \`SnpSift\`. Note that the package version is slightly different from upstream\, this is to make sure conda will order the package versions correctly.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snpsift/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snpsift/README.html