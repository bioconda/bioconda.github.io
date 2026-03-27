:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'moments'
.. highlight: bash

moments
=======

.. conda:recipe:: moments
   :replaces_section_title:
   :noindex:

   Evolutionary inference using SFS and LD statistics.

   :homepage: https://github.com/MomentsLD/moments
   :documentation: https://momentsld.github.io/moments
   
   :license: MIT / MIT
   :recipe: /`moments <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/moments>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/moments/meta.yaml>`_
   :links: doi: :doi:`10.1534/genetics.117.200493`, doi: :doi:`10.1371/journal.pgen.1008204`, doi: :doi:`10.1093/molbev/msz265`

   


.. conda:package:: moments

   |downloads_moments| |docker_moments|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.1-0</code>,  <code>1.5.0-1</code>,  <code>1.5.0-0</code>,  <code>1.4.5-0</code>,  <code>1.4.4-0</code>,  <code>1.4.3-0</code>,  <code>1.4.2-0</code>,  <code>1.3.1-0</code>,  <code>1.1.16-4</code>,  </span></summary>
      

      ``1.5.1-0``,  ``1.5.0-1``,  ``1.5.0-0``,  ``1.4.5-0``,  ``1.4.4-0``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.3.1-0``,  ``1.1.16-4``,  ``1.1.16-3``,  ``1.1.16-2``,  ``1.1.16-1``,  ``1.1.16-0``,  ``1.1.14-0``,  ``1.1.13-0``,  ``1.1.12-1``,  ``1.1.12-0``,  ``1.1.10-1``,  ``1.1.10-0``,  ``1.1.9-2``,  ``1.1.9-1``,  ``1.1.9-0``,  ``1.1.8-1``,  ``1.1.8-0``,  ``1.1.7-0``,  ``1.1.6-0``,  ``1.1.5-0``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.0.9-1``,  ``1.0.9-0``,  ``1.0.8-1``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-1``,  ``1.0.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends on demes: ``>=0.2``
   :depends on libgcc: ``>=14``
   :depends on mpmath: ``>=1.0,<1.4``
   :depends on numpy: ``>=1.23,<3``
   :depends on numpy: ``>=2.4.2,<3.0a0``
   :depends on python: ``>=3.14,<3.15.0a0``
   :depends on python_abi: ``3.14.* *_cp314``
   :depends on scipy: ``>=1.3,<1.17``

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

    pixi global install moments

to add into an existing workspace instead, run::

    pixi add moments

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install moments

Alternatively, to install into a new environment, run::

    conda create -n envname moments

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/moments:<tag>

(see `moments/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_moments| image:: https://img.shields.io/conda/dn/bioconda/moments.svg?style=flat
   :target: https://anaconda.org/bioconda/moments
   :alt:   (downloads)
.. |docker_moments| image:: https://quay.io/repository/biocontainers/moments/status
   :target: https://quay.io/repository/biocontainers/moments
.. _`moments/tags`: https://quay.io/repository/biocontainers/moments?tab=tags


.. raw:: html

    <script>
        var package = "moments";
        var versions = ["1.5.1","1.5.0","1.5.0","1.4.5","1.4.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/moments/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/moments/README.html