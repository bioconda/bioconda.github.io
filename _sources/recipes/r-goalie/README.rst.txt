:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-goalie'
.. highlight: bash

r-goalie
========

.. conda:recipe:: r-goalie
   :replaces_section_title:
   :noindex:

   Assertive check functions for defensive R programming.

   :homepage: https://r.acidgenomics.com/packages/goalie/
   :developer docs: https://github.com/acidgenomics/r-goalie
   :license: GPL / AGPL-3
   :recipe: /`r-goalie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-goalie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-goalie/meta.yaml>`_

   


.. conda:package:: r-goalie

   |downloads_r-goalie| |docker_r-goalie|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.8-0</code>,  <code>0.7.7-2</code>,  <code>0.7.7-1</code>,  <code>0.7.7-0</code>,  <code>0.7.6-1</code>,  <code>0.7.6-0</code>,  <code>0.7.5-0</code>,  <code>0.7.4-0</code>,  <code>0.7.3-0</code>,  </span></summary>
      

      ``0.7.8-0``,  ``0.7.7-2``,  ``0.7.7-1``,  ``0.7.7-0``,  ``0.7.6-1``,  ``0.7.6-0``,  ``0.7.5-0``,  ``0.7.4-0``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.6.18-0``,  ``0.6.17-0``,  ``0.6.16-0``,  ``0.6.15-0``,  ``0.6.14-0``,  ``0.6.13-0``,  ``0.6.12-0``,  ``0.6.11-0``,  ``0.6.10-1``,  ``0.6.10-0``,  ``0.6.9-1``,  ``0.6.9-0``,  ``0.6.8-1``,  ``0.6.8-0``,  ``0.6.7-0``,  ``0.6.6-1``,  ``0.6.6-0``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.5.5-0``,  ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-2``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.11-0``,  ``0.4.10-0``,  ``0.4.9-0``,  ``0.4.8-0``,  ``0.4.7-0``,  ``0.4.6-0``,  ``0.4.5-0``,  ``0.4.4-1``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.12-0``,  ``0.3.11-0``,  ``0.3.10-0``,  ``0.3.9-0``,  ``0.3.8-0``,  ``0.3.7-0``,  ``0.3.6-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.19-0``,  ``0.2.16-0``,  ``0.2.9-0``,  ``0.2.8-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.4,<4.5.0a0``

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

    pixi global install r-goalie

to add into an existing workspace instead, run::

    pixi add r-goalie

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-goalie

Alternatively, to install into a new environment, run::

    conda create -n envname r-goalie

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-goalie:<tag>

(see `r-goalie/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-goalie| image:: https://img.shields.io/conda/dn/bioconda/r-goalie.svg?style=flat
   :target: https://anaconda.org/bioconda/r-goalie
   :alt:   (downloads)
.. |docker_r-goalie| image:: https://quay.io/repository/biocontainers/r-goalie/status
   :target: https://quay.io/repository/biocontainers/r-goalie
.. _`r-goalie/tags`: https://quay.io/repository/biocontainers/r-goalie?tab=tags


.. raw:: html

    <script>
        var package = "r-goalie";
        var versions = ["0.7.8","0.7.7","0.7.7","0.7.7","0.7.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-goalie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-goalie/README.html