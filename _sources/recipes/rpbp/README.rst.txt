:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rpbp'
.. highlight: bash

rpbp
====

.. conda:recipe:: rpbp
   :replaces_section_title:
   :noindex:

   Ribosome profiling with Bayesian predictions \(Rp\-Bp\).

   :homepage: https://github.com/dieterich-lab/rp-bp
   :documentation: https://rp-bp.readthedocs.io/en/latest
   
   :license: MIT / MIT
   :recipe: /`rpbp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rpbp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rpbp/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkw1350`

   


.. conda:package:: rpbp

   |downloads_rpbp| |docker_rpbp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.0.1-1</code>,  <code>4.0.1-0</code>,  <code>4.0.0-0</code>,  <code>3.0.4-3</code>,  <code>3.0.4-2</code>,  <code>3.0.4-1</code>,  <code>3.0.4-0</code>,  <code>3.0.2-2</code>,  <code>3.0.2-1</code>,  </span></summary>
      

      ``4.0.1-1``,  ``4.0.1-0``,  ``4.0.0-0``,  ``3.0.4-3``,  ``3.0.4-2``,  ``3.0.4-1``,  ``3.0.4-0``,  ``3.0.2-2``,  ``3.0.2-1``,  ``3.0.2-0``,  ``3.0.1-1``,  ``3.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on appdirs: 
   :depends on bowtie2: 
   :depends on cmdstanpy: ``>=1.0.0``
   :depends on dash: 
   :depends on dash-bio: 
   :depends on dash-bootstrap-components: 
   :depends on fastqc: 
   :depends on flexbar: 
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``
   :depends on numpy: 
   :depends on pbiotools: ``>=5.0.0``
   :depends on pytest: 
   :depends on python: ``>=3.11,<3.12.0a0``
   :depends on python_abi: ``3.11.* *_cp311``
   :depends on pyyaml: 
   :depends on samtools: 
   :depends on star: 
   :depends on statsmodels: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install rpbp

to add into an existing workspace instead, run::

    pixi add rpbp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rpbp

Alternatively, to install into a new environment, run::

    conda create -n envname rpbp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rpbp:<tag>

(see `rpbp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rpbp| image:: https://img.shields.io/conda/dn/bioconda/rpbp.svg?style=flat
   :target: https://anaconda.org/bioconda/rpbp
   :alt:   (downloads)
.. |docker_rpbp| image:: https://quay.io/repository/biocontainers/rpbp/status
   :target: https://quay.io/repository/biocontainers/rpbp
.. _`rpbp/tags`: https://quay.io/repository/biocontainers/rpbp?tab=tags


.. raw:: html

    <script>
        var package = "rpbp";
        var versions = ["4.0.1","4.0.1","4.0.0","3.0.4","3.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rpbp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rpbp/README.html