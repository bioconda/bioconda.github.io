:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nebulizer'
.. highlight: bash

nebulizer
=========

.. conda:recipe:: nebulizer
   :replaces_section_title:
   :noindex:

   Command\-line utilities to help with managing users\, data libraries and tools in a Galaxy instance

   :homepage: https://github.com/pjbriggs/nebulizer
   :documentation: https://nebulizer.readthedocs.io/en/latest/
   
   :license: AFL-3.0
   :recipe: /`nebulizer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nebulizer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nebulizer/meta.yaml>`_

   


.. conda:package:: nebulizer

   |downloads_nebulizer| |docker_nebulizer|

   :versions:
      
      

      ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.0-2``,  ``0.5.0-0``

      

   
   :depends on bioblend: 
   :depends on click: ``<=6.7``
   :depends on mako: 
   :depends on python: 

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

    pixi global install nebulizer

to add into an existing workspace instead, run::

    pixi add nebulizer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nebulizer

Alternatively, to install into a new environment, run::

    conda create -n envname nebulizer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nebulizer:<tag>

(see `nebulizer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nebulizer| image:: https://img.shields.io/conda/dn/bioconda/nebulizer.svg?style=flat
   :target: https://anaconda.org/bioconda/nebulizer
   :alt:   (downloads)
.. |docker_nebulizer| image:: https://quay.io/repository/biocontainers/nebulizer/status
   :target: https://quay.io/repository/biocontainers/nebulizer
.. _`nebulizer/tags`: https://quay.io/repository/biocontainers/nebulizer?tab=tags


.. raw:: html

    <script>
        var package = "nebulizer";
        var versions = ["0.7.1","0.7.0","0.6.0","0.5.0","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nebulizer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nebulizer/README.html