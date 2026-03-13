:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'easypqp'
.. highlight: bash

easypqp
=======

.. conda:recipe:: easypqp
   :replaces_section_title:
   :noindex:

   EasyPQP\: Simple library generation for OpenSWATH

   :homepage: https://pypi.org/project/easypqp/
   :developer docs: https://github.com/grosenberger/easypqp
   :license: BSD / BSD-3-Clause
   :recipe: /`easypqp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/easypqp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/easypqp/meta.yaml>`_

   EasyPQP\: Simple library generation for OpenSWATH
   \=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=

   EasyPQP is a Python package that provides simplified and fast peptide query parameter generation for OpenSWATH. It can process input from MSFragger or other database search engines in pepXML format. Statistical validation can be conducted either using PyProphet or PeptideProphet\/iProphet. Retention times are calibrated using an internal or external standard. In addition to a cumulative library\, run\-specific libraries are generated for non\-linear RT alignment in OpenSWATH.

   Installation
   \=\=\=\=\=\=\=\=\=\=\=\=

   We strongly advice to install EasyPQP in a Python \[\*virtualenv\*\]\(https\:\/\/virtualenv.pypa.io\/en\/stable\/\). EasyPQP is compatible with Python 3.

   Install the development version of \*easypqp\* from GitHub\:

   \`\`\`\`
       \$ pip install git\+https\:\/\/github.com\/grosenberger\/easypqp.git\@master
   \`\`\`\`

   Running EasyPQP
   \=\=\=\=\=\=\=\=\=\=\=\=\=\=\=

   \*EasyPQP\* is not only a Python package\, but also a command line tool\:

   \`\`\`\`
      \$ easypqp \-\-help
   \`\`\`\`

   or\:

   \`\`\`\`
      \$ easypqp convert \-\-help
      \$ easypqp library \-\-help
   \`\`\`\`

   Docker
   \=\=\=\=\=\=

   EasyPQP is also available from Docker \(automated builds\)\:

   Pull the development version of \*easypqp\* from DockerHub \(synced with GitHub\)\:

   \`\`\`\`
       \$ docker pull grosenberger\/easypqp\:latest
   \`\`\`\`





.. conda:package:: easypqp

   |downloads_easypqp| |docker_easypqp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.58-0</code>,  <code>0.1.57-1</code>,  <code>0.1.57-0</code>,  <code>0.1.56-0</code>,  <code>0.1.55-0</code>,  <code>0.1.54-0</code>,  <code>0.1.53-0</code>,  <code>0.1.52-0</code>,  <code>0.1.51-0</code>,  </span></summary>
      

      ``0.1.58-0``,  ``0.1.57-1``,  ``0.1.57-0``,  ``0.1.56-0``,  ``0.1.55-0``,  ``0.1.54-0``,  ``0.1.53-0``,  ``0.1.52-0``,  ``0.1.51-0``,  ``0.1.50-1``,  ``0.1.50-0``,  ``0.1.49-0``,  ``0.1.48-0``,  ``0.1.47-0``,  ``0.1.46-0``,  ``0.1.45-0``,  ``0.1.44-0``,  ``0.1.42-0``,  ``0.1.41-0``,  ``0.1.40-0``,  ``0.1.39-0``,  ``0.1.37-0``,  ``0.1.36-0``,  ``0.1.35-0``,  ``0.1.34-0``,  ``0.1.33-0``,  ``0.1.32-0``,  ``0.1.30-0``,  ``0.1.29-0``,  ``0.1.28-0``,  ``0.1.27-0``,  ``0.1.26-0``,  ``0.1.25-0``,  ``0.1.24-0``,  ``0.1.23-0``,  ``0.1.22-0``,  ``0.1.21-0``,  ``0.1.20-0``,  ``0.1.19-0``,  ``0.1.18-0``,  ``0.1.17-0``,  ``0.1.16-0``,  ``0.1.15-0``,  ``0.1.14-0``,  ``0.1.13-0``,  ``0.1.12-0``,  ``0.1.11-0``,  ``0.1.10-0``,  ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on click: 
   :depends on matplotlib-base: 
   :depends on numba: 
   :depends on numpy: 
   :depends on pandas: ``<3.0``
   :depends on pyopenms: 
   :depends on pyprophet: 
   :depends on python: ``>=3.9``
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on seaborn-base: 
   :depends on statsmodels: 
   :depends on tqdm: 

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

    pixi global install easypqp

to add into an existing workspace instead, run::

    pixi add easypqp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install easypqp

Alternatively, to install into a new environment, run::

    conda create -n envname easypqp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/easypqp:<tag>

(see `easypqp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_easypqp| image:: https://img.shields.io/conda/dn/bioconda/easypqp.svg?style=flat
   :target: https://anaconda.org/bioconda/easypqp
   :alt:   (downloads)
.. |docker_easypqp| image:: https://quay.io/repository/biocontainers/easypqp/status
   :target: https://quay.io/repository/biocontainers/easypqp
.. _`easypqp/tags`: https://quay.io/repository/biocontainers/easypqp?tab=tags


.. raw:: html

    <script>
        var package = "easypqp";
        var versions = ["0.1.58","0.1.57","0.1.57","0.1.56","0.1.55"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/easypqp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/easypqp/README.html