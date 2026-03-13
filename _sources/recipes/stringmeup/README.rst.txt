:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'stringmeup'
.. highlight: bash

stringmeup
==========

.. conda:recipe:: stringmeup
   :replaces_section_title:
   :noindex:

   A post\-processing tool to reclassify Kraken 2 output based on the confidence score and\/or minimum minimizer hit groups.

   :homepage: https://github.com/danisven/StringMeUp
   :license: MIT / MIT
   :recipe: /`stringmeup <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stringmeup>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stringmeup/meta.yaml>`_

   


.. conda:package:: stringmeup

   |downloads_stringmeup| |docker_stringmeup|

   :versions:
      
      

      ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends on dataclasses: 
   :depends on python: ``>3``

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

    pixi global install stringmeup

to add into an existing workspace instead, run::

    pixi add stringmeup

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install stringmeup

Alternatively, to install into a new environment, run::

    conda create -n envname stringmeup

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/stringmeup:<tag>

(see `stringmeup/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_stringmeup| image:: https://img.shields.io/conda/dn/bioconda/stringmeup.svg?style=flat
   :target: https://anaconda.org/bioconda/stringmeup
   :alt:   (downloads)
.. |docker_stringmeup| image:: https://quay.io/repository/biocontainers/stringmeup/status
   :target: https://quay.io/repository/biocontainers/stringmeup
.. _`stringmeup/tags`: https://quay.io/repository/biocontainers/stringmeup?tab=tags


.. raw:: html

    <script>
        var package = "stringmeup";
        var versions = ["0.1.5","0.1.4","0.1.3","0.1.2","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stringmeup/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stringmeup/README.html