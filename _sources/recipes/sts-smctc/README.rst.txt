:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sts-smctc'
.. highlight: bash

sts-smctc
=========

.. conda:recipe:: sts-smctc
   :replaces_section_title:
   :noindex:

   A C\+\+ template class library for the efficient and convenient implementation of very general Sequential Monte Carlo algorithms.

   :homepage: https://github.com/matsengrp/smctc
   :license: GPL-3.0
   :recipe: /`sts-smctc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sts-smctc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sts-smctc/meta.yaml>`_

   


.. conda:package:: sts-smctc

   |downloads_sts-smctc| |docker_sts-smctc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0-13</code>,  <code>1.0-12</code>,  <code>1.0-11</code>,  <code>1.0-10</code>,  <code>1.0-9</code>,  <code>1.0-8</code>,  <code>1.0-7</code>,  <code>1.0-6</code>,  <code>1.0-5</code>,  </span></summary>
      

      ``1.0-13``,  ``1.0-12``,  ``1.0-11``,  ``1.0-10``,  ``1.0-9``,  ``1.0-8``,  ``1.0-7``,  ``1.0-6``,  ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on libcblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install sts-smctc

to add into an existing workspace instead, run::

    pixi add sts-smctc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sts-smctc

Alternatively, to install into a new environment, run::

    conda create -n envname sts-smctc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sts-smctc:<tag>

(see `sts-smctc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sts-smctc| image:: https://img.shields.io/conda/dn/bioconda/sts-smctc.svg?style=flat
   :target: https://anaconda.org/bioconda/sts-smctc
   :alt:   (downloads)
.. |docker_sts-smctc| image:: https://quay.io/repository/biocontainers/sts-smctc/status
   :target: https://quay.io/repository/biocontainers/sts-smctc
.. _`sts-smctc/tags`: https://quay.io/repository/biocontainers/sts-smctc?tab=tags


.. raw:: html

    <script>
        var package = "sts-smctc";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>





Notes
-----
This fork of smctc is maintained by the \[Matsen research group at the Fred Hutchinson Cancer Research Centre\]\(http\:\/\/matsen.fredhutch.org\/\) for use in the \[Sequential Tree Sampler online phylogenetics package\]\(https\:\/\/github.com\/OnlinePhylo\/sts\)


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sts-smctc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sts-smctc/README.html