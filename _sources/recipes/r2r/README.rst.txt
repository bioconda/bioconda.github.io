:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r2r'
.. highlight: bash

r2r
===

.. conda:recipe:: r2r
   :replaces_section_title:
   :noindex:

   software to speed depiction of aesthetic consensus RNA secondary structures

   :homepage: http://breaker.research.yale.edu/R2R/
   :license: GPL-2
   :recipe: /`r2r <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r2r>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r2r/meta.yaml>`_

   


.. conda:package:: r2r

   |downloads_r2r| |docker_r2r|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.6-5</code>,  <code>1.0.6-4</code>,  <code>1.0.6-3</code>,  <code>1.0.6-2</code>,  <code>1.0.6-1</code>,  <code>1.0.6-0</code>,  <code>1.0.5-3</code>,  <code>1.0.5-2</code>,  <code>1.0.5-1</code>,  </span></summary>
      

      ``1.0.6-5``,  ``1.0.6-4``,  ``1.0.6-3``,  ``1.0.6-2``,  ``1.0.6-1``,  ``1.0.6-0``,  ``1.0.5-3``,  ``1.0.5-2``,  ``1.0.5-1``,  ``1.0.5-0``,  ``1.0.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-clone: ``0.46.*``

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

    pixi global install r2r

to add into an existing workspace instead, run::

    pixi add r2r

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r2r

Alternatively, to install into a new environment, run::

    conda create -n envname r2r

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r2r:<tag>

(see `r2r/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r2r| image:: https://img.shields.io/conda/dn/bioconda/r2r.svg?style=flat
   :target: https://anaconda.org/bioconda/r2r
   :alt:   (downloads)
.. |docker_r2r| image:: https://quay.io/repository/biocontainers/r2r/status
   :target: https://quay.io/repository/biocontainers/r2r
.. _`r2r/tags`: https://quay.io/repository/biocontainers/r2r?tab=tags


.. raw:: html

    <script>
        var package = "r2r";
        var versions = ["1.0.6","1.0.6","1.0.6","1.0.6","1.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r2r/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r2r/README.html