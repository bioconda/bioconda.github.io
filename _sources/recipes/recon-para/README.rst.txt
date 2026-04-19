:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'recon-para'
.. highlight: bash

recon-para
==========

.. conda:recipe:: recon-para
   :replaces_section_title:
   :noindex:

   Performance\-optimized fork of RECON for de novo repeat family identification

   :homepage: https://github.com/unavailable-2374/RECON
   :documentation: http://eddylab.org/software/recon/
   
   :license: GPL-2.0-or-later
   :recipe: /`recon-para <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/recon-para>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/recon-para/meta.yaml>`_
   :links: doi: :doi:`10.1101/gr.88502`

   Performance\-optimized fork of RECON v1.05\, originally developed by
   Zhirong Bao and Sean Eddy \(http\:\/\/eddylab.org\/software\/recon\/\).
   Provides 10\-50x speedup through algorithm fixes\, I\/O optimization\,
   memory pool allocation\, and parallel sorting.



.. conda:package:: recon-para

   |downloads_recon-para| |docker_recon-para|

   :versions:
      
      

      ``1.05.1-0``

      

   
   :depends on __osx: ``>=11.0``
   :depends on coreutils: 
   :depends on perl: 

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

    pixi global install recon-para

to add into an existing workspace instead, run::

    pixi add recon-para

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install recon-para

Alternatively, to install into a new environment, run::

    conda create -n envname recon-para

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/recon-para:<tag>

(see `recon-para/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_recon-para| image:: https://img.shields.io/conda/dn/bioconda/recon-para.svg?style=flat
   :target: https://anaconda.org/bioconda/recon-para
   :alt:   (downloads)
.. |docker_recon-para| image:: https://quay.io/repository/biocontainers/recon-para/status
   :target: https://quay.io/repository/biocontainers/recon-para
.. _`recon-para/tags`: https://quay.io/repository/biocontainers/recon-para?tab=tags


.. raw:: html

    <script>
        var package = "recon-para";
        var versions = ["1.05.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/recon-para/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/recon-para/README.html