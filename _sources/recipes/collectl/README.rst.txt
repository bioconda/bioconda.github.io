:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'collectl'
.. highlight: bash

collectl
========

.. conda:recipe:: collectl
   :replaces_section_title:
   :noindex:

   Collectl is a light\-weight performance monitoring tool capable of reporting interactively as well as logging to disk.

   :homepage: https://github.com/sharkcz/collectl
   :documentation: https://collectl.sourceforge.net
   
   :license: Artistic License
   :recipe: /`collectl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/collectl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/collectl/meta.yaml>`_

   


.. conda:package:: collectl

   |downloads_collectl| |docker_collectl|

   :versions:
      
      

      ``4.3.20.2-0``,  ``4.3.20.1-0``,  ``4.0.4-3``,  ``4.0.4-2``,  ``4.0.4-1``,  ``4.0.4-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``

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

    pixi global install collectl

to add into an existing workspace instead, run::

    pixi add collectl

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install collectl

Alternatively, to install into a new environment, run::

    conda create -n envname collectl

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/collectl:<tag>

(see `collectl/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_collectl| image:: https://img.shields.io/conda/dn/bioconda/collectl.svg?style=flat
   :target: https://anaconda.org/bioconda/collectl
   :alt:   (downloads)
.. |docker_collectl| image:: https://quay.io/repository/biocontainers/collectl/status
   :target: https://quay.io/repository/biocontainers/collectl
.. _`collectl/tags`: https://quay.io/repository/biocontainers/collectl?tab=tags


.. raw:: html

    <script>
        var package = "collectl";
        var versions = ["4.3.20.2","4.3.20.1","4.0.4","4.0.4","4.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/collectl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/collectl/README.html