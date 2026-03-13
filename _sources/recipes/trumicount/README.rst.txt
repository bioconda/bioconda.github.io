:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trumicount'
.. highlight: bash

trumicount
==========

.. conda:recipe:: trumicount
   :replaces_section_title:
   :noindex:

   For NGS experiments using unique molecular identifiers \(UMIs\)\, molecules that are lost entirely during sequencing cause under\- estimation of the molecule count\, and amplification artifacts like PCR chimeras cause over\-estimation. TRUmiCount corrects UMI data for both types of errors\, thus improving the accuracy of measured molecule counts considerably.

   :homepage: https://cibiv.github.io/trumicount/
   :developer docs: https://github.com/Cibiv/trumicount
   :license: AGPL / AGPL-3.0
   :recipe: /`trumicount <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trumicount>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trumicount/meta.yaml>`_

   


.. conda:package:: trumicount

   |downloads_trumicount| |docker_trumicount|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.14-3</code>,  <code>0.9.14-2</code>,  <code>0.9.14-1</code>,  <code>0.9.14-0</code>,  <code>0.9.13-3</code>,  <code>0.9.13-2</code>,  <code>0.9.13-1</code>,  <code>0.9.13-0</code>,  <code>0.9.12-0</code>,  </span></summary>
      

      ``0.9.14-3``,  ``0.9.14-2``,  ``0.9.14-1``,  ``0.9.14-0``,  ``0.9.13-3``,  ``0.9.13-2``,  ``0.9.13-1``,  ``0.9.13-0``,  ``0.9.12-0``,  ``0.9.11.1-0``,  ``0.9.11-1``,  ``0.9.10-1``,  ``0.9.9.3-1``,  ``0.9.9.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on gawk: ``>=4.0.0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-data.table: 
   :depends on r-docopt: 
   :depends on r-gwpcr: ``>=0.9.10``

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

    pixi global install trumicount

to add into an existing workspace instead, run::

    pixi add trumicount

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install trumicount

Alternatively, to install into a new environment, run::

    conda create -n envname trumicount

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/trumicount:<tag>

(see `trumicount/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_trumicount| image:: https://img.shields.io/conda/dn/bioconda/trumicount.svg?style=flat
   :target: https://anaconda.org/bioconda/trumicount
   :alt:   (downloads)
.. |docker_trumicount| image:: https://quay.io/repository/biocontainers/trumicount/status
   :target: https://quay.io/repository/biocontainers/trumicount
.. _`trumicount/tags`: https://quay.io/repository/biocontainers/trumicount?tab=tags


.. raw:: html

    <script>
        var package = "trumicount";
        var versions = ["0.9.14","0.9.14","0.9.14","0.9.14","0.9.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trumicount/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trumicount/README.html