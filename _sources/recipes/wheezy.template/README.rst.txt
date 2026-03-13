:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wheezy.template'
.. highlight: bash

wheezy.template
===============

.. conda:recipe:: wheezy.template
   :replaces_section_title:
   :noindex:

   A lightweight template library.

   :homepage: https://github.com/akornatskyy/wheezy.template
   :documentation: https://wheezytemplate.readthedocs.io/en/latest
   
   :license: MIT / MIT
   :recipe: /`wheezy.template <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wheezy.template>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wheezy.template/meta.yaml>`_

   


.. conda:package:: wheezy.template

   |downloads_wheezy.template| |docker_wheezy.template|

   :versions:
      
      

      ``3.2.5-0``,  ``3.2.4-0``,  ``3.2.3-0``,  ``0.1.178-0``,  ``0.1.169-0``,  ``0.1.167-1``,  ``0.1.167-0``

      

   
   :depends on python: ``>=3.9``

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

    pixi global install wheezy.template

to add into an existing workspace instead, run::

    pixi add wheezy.template

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install wheezy.template

Alternatively, to install into a new environment, run::

    conda create -n envname wheezy.template

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/wheezy.template:<tag>

(see `wheezy.template/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_wheezy.template| image:: https://img.shields.io/conda/dn/bioconda/wheezy.template.svg?style=flat
   :target: https://anaconda.org/bioconda/wheezy.template
   :alt:   (downloads)
.. |docker_wheezy.template| image:: https://quay.io/repository/biocontainers/wheezy.template/status
   :target: https://quay.io/repository/biocontainers/wheezy.template
.. _`wheezy.template/tags`: https://quay.io/repository/biocontainers/wheezy.template?tab=tags


.. raw:: html

    <script>
        var package = "wheezy.template";
        var versions = ["3.2.5","3.2.4","3.2.3","0.1.178","0.1.169"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wheezy.template/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wheezy.template/README.html