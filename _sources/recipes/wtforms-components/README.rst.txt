:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wtforms-components'
.. highlight: bash

wtforms-components
==================

.. conda:recipe:: wtforms-components
   :replaces_section_title:
   :noindex:

   Additional fields\, validators and widgets for WTForms.

   :homepage: https://github.com/kvesteri/wtforms-components
   :license: BSD License
   :recipe: /`wtforms-components <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wtforms-components>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wtforms-components/meta.yaml>`_

   


.. conda:package:: wtforms-components

   |downloads_wtforms-components| |docker_wtforms-components|

   :versions:
      
      

      ``0.10.0-2``,  ``0.10.0-0``

      

   
   :depends on intervals: ``>=0.6.0``
   :depends on phonenumbers: 
   :depends on python: 
   :depends on six: ``>=1.4.1``
   :depends on validators: ``>=0.5.0``
   :depends on wtforms: ``>=1.0.4``

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

    pixi global install wtforms-components

to add into an existing workspace instead, run::

    pixi add wtforms-components

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install wtforms-components

Alternatively, to install into a new environment, run::

    conda create -n envname wtforms-components

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/wtforms-components:<tag>

(see `wtforms-components/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_wtforms-components| image:: https://img.shields.io/conda/dn/bioconda/wtforms-components.svg?style=flat
   :target: https://anaconda.org/bioconda/wtforms-components
   :alt:   (downloads)
.. |docker_wtforms-components| image:: https://quay.io/repository/biocontainers/wtforms-components/status
   :target: https://quay.io/repository/biocontainers/wtforms-components
.. _`wtforms-components/tags`: https://quay.io/repository/biocontainers/wtforms-components?tab=tags


.. raw:: html

    <script>
        var package = "wtforms-components";
        var versions = ["0.10.0","0.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wtforms-components/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wtforms-components/README.html