:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'unicore'
.. highlight: bash

unicore
=======

.. conda:recipe:: unicore
   :replaces_section_title:
   :noindex:

   Universal and efficient core gene phylogeny with Foldseek and ProstT5

   :homepage: https://github.com/steineggerlab/unicore
   :license: GPL3 / GNU-3.0-or-later
   :recipe: /`unicore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unicore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unicore/meta.yaml>`_

   


.. conda:package:: unicore

   |downloads_unicore| |docker_unicore|

   :versions:
      
      

      ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0c-1``,  ``1.0.0c-0``

      

   
   :depends on fasttree: 
   :depends on foldmason: 
   :depends on foldseek: ``>=10.941cd33``
   :depends on iqtree: 
   :depends on mafft: 
   :depends on openssl: ``>=3.5.0,<4.0a0``
   :depends on raxml: 

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

    pixi global install unicore

to add into an existing workspace instead, run::

    pixi add unicore

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install unicore

Alternatively, to install into a new environment, run::

    conda create -n envname unicore

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/unicore:<tag>

(see `unicore/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_unicore| image:: https://img.shields.io/conda/dn/bioconda/unicore.svg?style=flat
   :target: https://anaconda.org/bioconda/unicore
   :alt:   (downloads)
.. |docker_unicore| image:: https://quay.io/repository/biocontainers/unicore/status
   :target: https://quay.io/repository/biocontainers/unicore
.. _`unicore/tags`: https://quay.io/repository/biocontainers/unicore?tab=tags


.. raw:: html

    <script>
        var package = "unicore";
        var versions = ["1.1.1","1.1.0","1.0.2","1.0.1","1.0.0c"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/unicore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/unicore/README.html