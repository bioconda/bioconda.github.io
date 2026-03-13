:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mdust'
.. highlight: bash

mdust
=====

.. conda:recipe:: mdust
   :replaces_section_title:
   :noindex:

   mdust from DFCI Gene Indices Software Tools.

   :homepage: https://compbio.dfci.harvard.edu/tgi
   :license: The Artistic License
   :recipe: /`mdust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mdust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mdust/meta.yaml>`_

   


.. conda:package:: mdust

   |downloads_mdust| |docker_mdust|

   :versions:
      
      

      ``2006.10.17-7``,  ``2006.10.17-6``,  ``2006.10.17-5``,  ``2006.10.17-4``,  ``2006.10.17-3``,  ``2006.10.17-2``,  ``2006.10.17-1``,  ``2006.10.17-0``

      

   
   :depends on libgcc: ``>=13``

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

    pixi global install mdust

to add into an existing workspace instead, run::

    pixi add mdust

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mdust

Alternatively, to install into a new environment, run::

    conda create -n envname mdust

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mdust:<tag>

(see `mdust/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mdust| image:: https://img.shields.io/conda/dn/bioconda/mdust.svg?style=flat
   :target: https://anaconda.org/bioconda/mdust
   :alt:   (downloads)
.. |docker_mdust| image:: https://quay.io/repository/biocontainers/mdust/status
   :target: https://quay.io/repository/biocontainers/mdust
.. _`mdust/tags`: https://quay.io/repository/biocontainers/mdust?tab=tags


.. raw:: html

    <script>
        var package = "mdust";
        var versions = ["2006.10.17","2006.10.17","2006.10.17","2006.10.17","2006.10.17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mdust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mdust/README.html